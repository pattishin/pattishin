package main

import (
  "context"
  "net/http"
  "cloud.google.com/go/firestore"
  "github.com/gin-gonic/gin"
  "github.com/gin-contrib/cors"
  "google.golang.org/api/iterator"
  "google.golang.org/api/option"
)

const firestoreAccountFile = "firebase.json"
const firestoreProjectId = "pattishin-b5b2a"

type formData struct {
  Name string `json:"name" binding:"required"`
  Email string `json:"email" binding:"required"`
}

type Author struct {
  Name string `json:"name" binding:"required"`
  Description string `json:"description" binding:"required"`
}

type Talk struct {
  Title string `json:"title" binding:"required`
  Summary string `json:"summary" binding:"required"`
  Date string `json:"date" binding:"optional"`
  Link string `json:"link" binding:"optional"`
  Img string `json:"img" binding:"optional"`
}

type Project struct {
  Title string `json:"title" binding:"required`
  Summary string `json:"summary" binding:"required"`
  Link string `json:"link" binding:"optional"`
}

type Podcast struct {
  Title string `json:"title" binding:"required`
  SeriesName string `json:"series_name" binding:"required"`
  Episode int `json:"episode" binding:"required"`
  Date string `json:"date" binding:"optional"`
  Link string `json:"link" binding:"optional"`
}

// TODO: Refactor common portions in /talks & /author api
func main() {
  // router init
  router := gin.Default()
  config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000","http://pattishin.io/","https://pattishin-b5b2a.uc.r.appspot.com"}
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

  // run application on port 8080
  router.Run(":8080")
}

/**
 * Create a new firestore instance 
 */
func createNewFirestore (ctx context.Context) (*firestore.Client, error)  {
  return firestore.NewClient(ctx, firestoreProjectId, option.WithServiceAccountFile(firestoreAccountFile))
}

/**
 *  Handle new user creation
 */
func userHandler(c *gin.Context) {
  ctx := context.Background()
  client, err := createNewFirestore(ctx)
  if err != nil {
    c.JSON(http.StatusBadRequest, gin.H{ "error": err.Error() })
  }

  defer client.Close()

  var form formData
  c.BindJSON(&form)

	// [START add user to firestore]
	_, _, err = client.Collection("users").Add(ctx, map[string]interface{}{
		"name":  form.Name,
		"email": form.Email,
	})
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// [END add user to firestore]
	c.JSON(http.StatusOK, gin.H{"status": "user added to db"})
}

/**
 *  Get talk list
 */
 func talksHandler(c *gin.Context) {
   ctx := context.Background()
   client, err := createNewFirestore(ctx)
   if err != nil {
     c.JSON(http.StatusBadRequest, gin.H{ "error": err.Error() })
   }

   defer client.Close()

   // [START get talks from firestore]
   var talks []Talk
   var iter = client.Collection("talks").Documents(ctx)

   defer iter.Stop()

   for {
     doc, err := iter.Next()
     if err == iterator.Done {
       break
     }
     if err != nil {
       c.JSON(http.StatusBadRequest, gin.H{ "error": err.Error() })
     }

     var model Talk
     if err := doc.DataTo(&model); err != nil {
       c.JSON(http.StatusBadRequest, gin.H{ "error": err.Error() })
     }

     talks = append(talks, model)
     // [END get talks from firestore]
   }
   c.Writer.Header().Set("Content-Type", "application/json")
   c.JSON(http.StatusOK, talks)
 }

/**
 *  Retrieve author
 */
 func authorHandler(c *gin.Context) {
   ctx := context.Background()
   client, err := createNewFirestore(ctx)
   if err != nil {
     c.JSON(http.StatusBadRequest, gin.H{ "error": err.Error() })
   }

   defer client.Close()

   var authors []Author
   var iter = client.Collection("author").Documents(ctx)

   defer iter.Stop()

   for {
     doc, err := iter.Next()
     if err == iterator.Done {
       break
     }
     if err != nil {
       c.JSON(http.StatusBadRequest, gin.H{ "error": err.Error() })
     }

     var model Author
     if err := doc.DataTo(&model); err != nil {
       c.JSON(http.StatusBadRequest, gin.H{ "error": err.Error() })
     }

     authors = append(authors, model)
   }
   c.Writer.Header().Set("Content-Type", "application/json")
   c.JSON(http.StatusOK, authors)
 }

