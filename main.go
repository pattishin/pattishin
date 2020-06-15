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

type Response struct {
  StatusCode  int       `json:"statusCode"`
  Headers     map[string]string  `json:"headers"`
  Body        string    `json:"body"`
}

type Character struct {
  Name string `json:"name" binding:"required"`
  Height int `json:"height" binding:"required"`
  HairColor string `json:"hair_color" binding:"required"`
  BirthYear string `json:"birth_year" binding:"required"`
}

type Author struct {
  Name string `json:"name" binding:"required"`
  Description string `json:"description" binding:"required"`
}

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
  apiRoutes.GET("/characters", characterHandler)
  apiRoutes.POST("/user", userHandler)
  // Serve from static build library
  //router.StaticFS("/", http.Dir("./build"))

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
 *  Handle characters
 */
 func characterHandler(c *gin.Context) {
   ctx := context.Background()
   client, err := createNewFirestore(ctx)
   if err != nil {
     c.JSON(http.StatusBadRequest, gin.H{ "error": err.Error() })
   }

   defer client.Close()

   // [START get star wars from firestore]
   var characters []Character
   var iter = client.Collection("characters").Documents(ctx)

   defer iter.Stop()

   for {
     doc, err := iter.Next()
     if err == iterator.Done {
       break
     }
     if err != nil {
       c.JSON(http.StatusBadRequest, gin.H{ "error": err.Error() })
     }

     var model Character
     if err := doc.DataTo(&model); err != nil {
       c.JSON(http.StatusBadRequest, gin.H{ "error": err.Error() })
     }

     characters = append(characters, model)
     // [END get star wars from firestore]
   }
   c.Writer.Header().Set("Content-Type", "application/json")
   c.JSON(http.StatusOK, characters)
 }

 /**
 *  Handle author
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

