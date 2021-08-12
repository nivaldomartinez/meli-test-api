const https = require('https');

/**
 * apiRequest:  this make a http request and return a json object
 * @param options: http options
 * @param completeHandler: callback to return the results
 */

module.exports = (options) => {

  return new Promise((resolve, reject) => {
    let output = '';

    const request = https.request(options, (res) => {
      res.setEncoding('utf8');

      res.on('data', (chunk) => {
        output += chunk;
      });

      res.on('end', () => {
        const response = JSON.parse(output);
        resolve(response);
      });
    });

    request.on('error', (err) => {
      reject(err)
    });

    request.end();
  })
};
