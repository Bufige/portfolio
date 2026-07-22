#!/usr/bin/env bash
set -euo pipefail

BUCKET="s3://bufige.portifolio"
DISTRIBUTION_ID="E3UCLWQQJUTX7O"

echo "=== Syncing to S3 ==="
aws s3 sync build/ "$BUCKET" --delete

echo ""
echo "=== Invalidating CloudFront ==="
aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*"

echo ""
echo "=== Done ==="
