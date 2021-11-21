# Middleware
Node.js function to merge product data and product images and send response back for frontend.
Deployed as a Lambda function to AWS using serverless framework.
## Run Locally

```bash
# install dependencies
$ npm install

# install serverless
$ npm install -g serverless

# invoke function locally
$ serverless invoke local --function dipatcher
```
## Deploy Setup

```bash
$ serverless deploy --aws-profile profile-name
```
