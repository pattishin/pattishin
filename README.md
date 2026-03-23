<div align="center">
  <img alt="Logo" src="https://github.com/pattishin/pattishin/blob/master/src/assets/logo.png" width="200px" />
</div>
<h1 align="center">pattishin.io</h1>
<p align="center">
  <a href="https://pattishin-site.web.app" target="_blank">pattishin-site.web.app</a>
  &nbsp;·&nbsp;
  <a href="https://pattishin.io" target="_blank">pattishin.io</a>
</p>
<p align="center">
  Built with React + Golang.
</p>

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Material UI v6, Emotion, Cinzel / Raleway fonts |
| Backend | Golang (Gin), Cloud Firestore |
| Hosting | Firebase Hosting (frontend), Google Cloud Run (backend) |
| CI/CD | GitHub Actions |

---

## Getting started

### Frontend (React)

```sh
npm install
npm start
```

Opens at [http://localhost:3000](http://localhost:3000). The page hot-reloads on edits.

```sh
npm test   # run tests in interactive watch mode
npm run build  # create an optimized production build → /build
```

### Backend (Golang)

```sh
go mod download
go run main.go
```

API runs at `http://localhost:8080`. Example:

```sh
curl localhost:8080/api/author
```

The backend requires a Firestore service account. Set `GOOGLE_APPLICATION_CREDENTIALS` to your credentials file, or run inside GCP where ADC is available automatically.

### Backend (Docker)

```sh
docker build -t pattishin-api .
docker run -p 8080:8080 pattishin-api
```

---

## Deploying

Deployments to production happen automatically via GitHub Actions on every push to `main` (see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

To deploy manually:

```sh
# Frontend only (builds React → Firebase Hosting)
./deploy.sh frontend

# Backend only (Docker → Cloud Run)
./deploy.sh backend

# Both
./deploy.sh all
```

The deploy script requires `firebase-tools` and the `gcloud` CLI to be installed and authenticated.

---

## Writing blog posts

Blog posts live in [`public/blog/`](public/blog/) as plain Markdown files. No code changes needed.

**1. Create the post file**

```
public/blog/my-post-slug.md
```

Standard Markdown is supported, including fenced code blocks, tables (GFM), blockquotes, and inline code.

**2. Register it in the manifest**

Add an entry to [`public/blog/manifest.json`](public/blog/manifest.json):

```json
{
  "posts": [
    {
      "slug": "my-post-slug",
      "title": "My Post Title",
      "date": "2026-03-20",
      "description": "A short description shown on the blog list card.",
      "tags": ["tag1", "tag2"]
    }
  ]
}
```

Posts appear in the order they are listed in the manifest. The `slug` must exactly match the filename (without `.md`).

---

## GitHub Actions workflows

| Workflow | Trigger | What it does |
|---|---|---|
| `deploy.yml` | Push to `main` | Builds and deploys frontend + backend in parallel |

### Required secrets

| Secret | Used by |
|---|---|
| `GCP_SA_KEY` | `deploy.yml` — GCP service account JSON with Firebase Hosting Admin, Cloud Run Admin, Storage Admin, and Service Account User roles |
| `JULES_API_KEY` |
