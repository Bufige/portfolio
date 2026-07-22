# Deploy

Deploy the portfolio to S3 and invalidate CloudFront.

## Steps

1. Build: `npm run build`
2. Sync: `aws s3 sync build/ s3://bufige.portifolio --delete`
3. Invalidate: `aws cloudfront create-invalidation --distribution-id E3UCLWQQJUTX7O --paths "/*"`

Or just run:
```sh
.opencode/skills/deploy/deploy.sh
```
