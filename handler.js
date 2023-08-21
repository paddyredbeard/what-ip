'use-strict'

module.exports.json = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
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

module.exports.plain = async (event) => {
  return {
    headers: {
      'Content-Type': 'text/plain'
    },
    statusCode: 200,
    body: '' + event.requestContext.http.sourceIp
  }
}
