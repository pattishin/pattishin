package main

import (
  "context"
  "log"
  "net/http"
  "os"
  "cloud.google.com/go/firestore"
  "github.com/gin-gonic/gin"
  "github.com/gin-contrib/cors"
  "google.golang.org/api/iterator"
)

const firestoreProjectId = "pattishin-site"

type formData struct {
  Name string `json:"name" binding:"required"`
  Email string `json:"email" binding:"required"`
}

type Author struct {
  Name string `json:"name" binding:"required"`
  Description string `json:"description" binding:"required"`
}

type Talk struct {
  Title string `json:"title" binding:"required"`
  Summary string `json:"summary" binding:"required"`
  Date string `json:"date" binding:"optional"`
  Link string `json:"link" binding:"optional"`
  Img string `json:"img" binding:"optional"`
}

type Project struct {
  Title string `json:"title" binding:"required"`
  Summary string `json:"summary" binding:"required"`
  Link string `json:"link" binding:"optional"`
}

type Podcast struct {
  Title string `json:"title" binding:"required"`
  SeriesName string `json:"series_name" binding:"required"`
  Episode int `json:"episode" binding:"required"`
  Date string `json:"date" binding:"optional"`
  Link string `json:"link" binding:"optional"`
}

func SecurityHeadersMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("X-Content-Type-Options", "nosniff")
		c.Writer.Header().Set("X-Frame-Options", "DENY")
		c.Writer.Header().Set("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;")
		c.Next()
	}
}

func main() {
  // router init
  router := gin.Default()

  // Apply security headers
  router.Use(SecurityHeadersMiddleware())

  config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000","https://pattishin.io","https://pattishin-site.web.app","https://pattishin-site.firebaseapp.com"}
  config.AllowMethods = []string{"GET", "POST"}
	config.AllowHeaders = []string{"Origin"}
	config.ExposeHeaders = []string{"Content-Length"}

  router.Use(cors.New(config))

  // routes
  apiRoutes := router.Group("/api")
 
  apiRoutes.GET("/author", authorHandler)
  apiRoutes.GET("/talks", talksHandler)
  // apiRoutes.GET("/projects", projectsHandler)
  // apiRoutes.GET("/podcasts", podcastHandler)
  // apiRoutes.GET("/community", communityHandler)
  // apiRoutes.GET("/experience", experienceHandler)
  
  apiRoutes.POST("/user", userHandler)

  // Cloud Run injects PORT; fall back to 8080 for local dev
  port := os.Getenv("PORT")
  if port == "" {
    port = "8080"
  }
  router.Run(":" + port)
}

/**
 * Create a new firestore instance
 */
func createNewFirestore(ctx context.Context) (*firestore.Client, error) {
  return firestore.NewClient(ctx, firestoreProjectId)
}

/**
 * queryCollection iterates a Firestore collection, calling scan for each document.
 * Returns false if it already wrote an error response to c.
 */
func queryCollection(c *gin.Context, collection string, scan func(*firestore.DocumentSnapshot) error) bool {
  ctx := c.Request.Context()
  client, err := createNewFirestore(ctx)
  if err != nil {
    log.Printf("Error creating firestore client: %v", err)
    c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal server error"})
    return false
  }
  defer client.Close()

  iter := client.Collection(collection).Documents(ctx)
  defer iter.Stop()

  for {
    doc, err := iter.Next()
    if err == iterator.Done {
      break
    }
    if err != nil {
      log.Printf("Error iterating %s: %v", collection, err)
      c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal server error"})
      return false
    }
    if err := scan(doc); err != nil {
      log.Printf("Error mapping %s data: %v", collection, err)
      c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal server error"})
      return false
    }
  }
  return true
}

/**
 *  Handle new user creation
 */
func userHandler(c *gin.Context) {
  ctx := c.Request.Context()
  client, err := createNewFirestore(ctx)
  if err != nil {
    log.Printf("Error creating firestore client: %v", err)
    c.JSON(http.StatusInternalServerError, gin.H{ "error": "Internal server error" })
    return
  }

  defer client.Close()

  var form formData
  if err := c.BindJSON(&form); err != nil {
    return
  }

	// [START add user to firestore]
	_, _, err = client.Collection("users").Add(ctx, map[string]interface{}{
		"name":  form.Name,
		"email": form.Email,
	})
	if err != nil {
    log.Printf("Error adding user to firestore: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal server error"})
		return
	}
	// [END add user to firestore]
	c.JSON(http.StatusOK, gin.H{"status": "user added to db"})
}

/**
 *  Get talk list
 */
func talksHandler(c *gin.Context) {
  var talks []Talk
  if !queryCollection(c, "talks", func(doc *firestore.DocumentSnapshot) error {
    var t Talk
    if err := doc.DataTo(&t); err != nil {
      return err
    }
    talks = append(talks, t)
    return nil
  }) {
    return
  }
  c.JSON(http.StatusOK, talks)
}

/**
 *  Retrieve author
 */
func authorHandler(c *gin.Context) {
  var authors []Author
  if !queryCollection(c, "author", func(doc *firestore.DocumentSnapshot) error {
    var a Author
    if err := doc.DataTo(&a); err != nil {
      return err
    }
    authors = append(authors, a)
    return nil
  }) {
    return
  }
  c.JSON(http.StatusOK, authors)
}

