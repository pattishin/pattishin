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
| `security-agent.yml` | Daily at 6 AM UTC | Jules scans for vulnerabilities and opens a PR if found |
| `weekly-cleanup.yml` | Mondays at 2 AM UTC | Jules refactors dead code and opens a PR if changes are impactful |

### Required secrets

| Secret | Used by |
|---|---|
| `GCP_SA_KEY` | `deploy.yml` — GCP service account JSON with Firebase Hosting Admin, Cloud Run Admin, Storage Admin, and Service Account User roles |
| `JULES_API_KEY` | `security-agent.yml`, `weekly-cleanup.yml` |

---

## Connecting a custom domain (Squarespace DNS)

The site is deployed to Firebase Hosting at **`https://pattishin-site.web.app`**. To point a custom domain (e.g. `pattishin.io`) managed through Squarespace:

### Step 1 — Add the domain in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com) → select **pattishin-site**
2. Navigate to **Build → Hosting → Add custom domain**
3. Enter your domain (e.g. `pattishin.io`) and click **Continue**
4. Firebase will show a **TXT record** for ownership verification — copy it

### Step 2 — Add DNS records in Squarespace

1. Log in to [Squarespace](https://account.squarespace.com/domains) → **Domains** → click your domain → **DNS Settings**
2. Scroll to **Custom Records** and add the TXT record Firebase provided:

   | Type | Host | Value |
   |---|---|---|
   | `TXT` | `@` | _(paste the value Firebase shows)_ |

3. Click **Save** and return to the Firebase Console. Click **Verify** — this may take a few minutes to propagate.

### Step 3 — Add A records for the apex domain

After verification, Firebase shows two **A records** (IP addresses). Add both in Squarespace DNS:

| Type | Host | Value |
|---|---|---|
| `A` | `@` | _(first IP from Firebase, e.g. `151.101.1.195`)_ |
| `A` | `@` | _(second IP from Firebase, e.g. `151.101.65.195`)_ |

> **Note:** Firebase's actual IPs are shown in the Console during setup — use those, not the examples above.

### Step 4 — Add a CNAME for `www`

| Type | Host | Value |
|---|---|---|
| `CNAME` | `www` | `pattishin-site.web.app.` |

> If Squarespace already has a `www` CNAME pointing to their servers, update it to point to Firebase instead.

### Step 5 — Wait for propagation

DNS changes can take **a few minutes to a few hours** to propagate globally. Firebase Hosting automatically provisions an SSL certificate (via Let's Encrypt) once the records resolve — no extra configuration needed.

### Verifying

Once live, both of these should resolve to your site:
- `https://pattishin.io`
- `https://www.pattishin.io`

You can check propagation status at [dnschecker.org](https://dnschecker.org).
