<div align="center">
  <img alt="Logo" src="https://github.com/pattishin/pattishin-site/blob/main/src/assets/logo.png" width="200px" />
</div>
<h1 align="center">pattishin.io</h1>
<p align="center">
  <a href="https://pattishin.io" target="_blank">pattishin.io</a>
</p>

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router v7, Material UI v6, Emotion |
| Browser targeting | Browserslist with [Baseline](https://web.dev/baseline) queries |
| Hosting | Firebase Hosting |
| CI/CD | GitHub Actions |

---

## Getting started

```sh
npm install
npm start
```

Opens at [http://localhost:3000](http://localhost:3000) with hot reload.

```sh
npm run build   # optimized production build → /build
npm test        # run tests in watch mode
```

---

## Deploying

Pushes to `main` automatically deploy via GitHub Actions.

To deploy manually:

```sh
./deploy.sh
```

Requires `firebase-tools` installed and authenticated (`firebase login`).

### Required secret

| Secret | Used by |
|---|---|
| `GCP_SA_KEY` | GitHub Actions — Firebase Hosting service account |

---

## Project structure

```
src/
  components/       # UI components (About, Blogs, Projects, Talks, …)
  containers/       # App shell and routing
  helpers/          # Static data (Wall-E sprite frames, firefly positions)
  sprites/          # PixelSprite renderer + Monument Valley sprite data
  utils/            # Shared utilities (withStyles)
```

---

## Writing blog posts

Blog posts live in [`public/blog/`](public/blog/) as Markdown files.

**1. Create the post**

```
public/blog/my-post-slug.md
```

Supports standard Markdown including GFM tables, fenced code blocks, and blockquotes.

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

The `slug` must match the filename exactly (without `.md`). Posts appear in manifest order.
