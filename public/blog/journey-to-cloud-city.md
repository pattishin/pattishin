# Journey to Cloud City

*A Google Cloud Platform story series*

---

## Episode 1: The Call to Adventure

The world beyond the terminal was vast and unknown.

**Cloud Traveler** had spent years wrangling local servers — coaxing them to life at 2 AM, pleading with them during demos, mourning them when the power went out. But whispers of a legendary place had begun to reach even the humblest dev environments: a city in the sky where services scaled themselves, databases never slept, and deployments happened with a single command.

They called it **Cloud City**.

---

## The Characters

**☁️ Cloud Traveler**
A scrappy developer with a knack for building things from scratch. Equipped with a terminal, a trusty IDE, and an unquenchable curiosity about what lies beyond `localhost:3000`.

**🚂 Cloud Train Conductor**
The wise and slightly dramatic guide of the Cloud Express. Knows every route, every API endpoint, and every GCP service that Cloud City has to offer. Has strong opinions about IAM roles.

---

## Boarding the Cloud Express

The journey begins with two incantations:

```bash
gcloud init
gcloud config set project my-cloud-city-project
```

Cloud Traveler stared at the blinking cursor. The Cloud Express hummed to life.

> "First stop," announced the Conductor, "**App Engine** — where your code runs without you ever touching a server."

---

## Stop 1: App Engine

Cloud Traveler learned that App Engine could run their web server without provisioning a single VM. Just an `app.yaml` and a deploy command:

```yaml
runtime: go121
service: default
```

```bash
gcloud app deploy
```

The app was live in minutes. Cloud Traveler looked out the window at the disappearing on-prem landscape and felt something unfamiliar: *confidence*.

---

## Stop 2: Cloud Firestore

The Conductor gestured toward a glowing station ahead.

> "Firestore — a NoSQL document database that syncs in real time. No schema migrations. No connection pools. Just data."

```go
client, err := firestore.NewClient(ctx, projectID)
if err != nil {
    log.Fatal(err)
}

_, err = client.Collection("travelers").Doc("cloud-traveler").Set(ctx, map[string]interface{}{
    "name":   "Cloud Traveler",
    "status": "en route to Cloud City",
    "xp":     9001,
})
```

Cloud Traveler committed this to memory. *Collections. Documents. No foreign keys. Got it.*

---

## Stop 3: Cloud Run

> "This is where things get interesting," said the Conductor, voice dropping to a reverent whisper.

Cloud Run: fully managed containers, auto-scaling to zero, pay only for what you use.

```dockerfile
FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY . .
RUN go build -o server .

FROM alpine:3.19
COPY --from=builder /app/server .
CMD ["./server"]
```

```bash
gcloud run deploy my-service \
  --image gcr.io/my-project/my-service \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

*A container, deployed, scaled, managed — all without a single SSH session.* Cloud Traveler exhaled slowly.

---

## To Be Continued...

The Cloud Express accelerated. Through the window, Cloud City shimmered on the horizon — its towers of compute, its rivers of data streaming between services, its lights blinking in perfect orchestration.

Cloud Traveler opened a new terminal window.

The journey had only just begun.

---

*Follow along at [journey-to-cloud-city-blog.glitch.me](https://journey-to-cloud-city-blog.glitch.me)*
