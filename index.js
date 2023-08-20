'use-strict'

module.exports.handler = async (event) => {
  if (
    event.queryStringParameters !== null &&
    Object.hasOwn(event.queryStringParameters, 'out') &&
    event.queryStringParameters.out === 'text'
  ) {
    return {
      headers: {
        'Content-Type': 'text/plain'
      },
      statusCode: 200,
      body: '' + event.requestContext.http.sourceIp
    }
  }

  return {
    statusCode: 200,
    headers: [
      'content-type: application/json'
    ],
    body: JSON.stringify(
      {
        ip: event.requestContext.http.sourceIp,
        utc: new Date()
      },
      null,
      2
    )
  }
}
