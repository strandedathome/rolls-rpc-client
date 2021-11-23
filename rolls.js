var request = require('request');

var headers = {
    'Content-Type': 'application/json'
};

var dataString = '{}';

var options = {
    url: 'https://localhost:9877/get_blockchain_state',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
