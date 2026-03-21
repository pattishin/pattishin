#!/bin/bash
set -e

PROJECT=pattishin-site
SERVICE=pattishin-api
REGION=us-central1
IMAGE=gcr.io/$PROJECT/$SERVICE

# ── Frontend: build + Firebase Hosting ───────────────────────────────────────
deploy_frontend() {
  npm run build
  firebase deploy --only hosting --project $PROJECT
}

# ── Backend: Docker image + Cloud Run ────────────────────────────────────────
# Requires billing enabled on $PROJECT
deploy_backend() {
  gcloud builds submit --tag $IMAGE --project $PROJECT
  gcloud run deploy $SERVICE \
    --image $IMAGE \
    --platform managed \
    --region $REGION \
    --project $PROJECT \
    --allow-unauthenticated
}

# ── Entry point ───────────────────────────────────────────────────────────────
case "${1:-all}" in
  frontend) deploy_frontend ;;
  backend)  deploy_backend ;;
  all)      deploy_frontend && deploy_backend ;;
  *)        echo "Usage: ./deploy.sh [frontend|backend|all]" && exit 1 ;;
esac
