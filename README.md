# Serverless What Is My IP?

A serverless implementation that returns the client's apparent/extern IP address.

## Installation & Deployment

Prereqs:  
Working installation of the [serverless framework](https://www.serverless.com/framework/docs/getting-started) and AWS account.

1. Clone this repo & cd into local working dir
2. `$ npm install`
3. `$ serverless deploy` _or_ `$ serverless deploy --stage prod`

## Routes

`GET /` returns plaintext payload:  

```
127.0.0.1
```

`GET /ip.json` returns JSON payload:  

```json
{
  "ip": "127.0.0.1",
  "utc": "2023-08-20T00:55:18.862Z"
}
```
