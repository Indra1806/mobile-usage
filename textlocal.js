const https = require('https');

const apiKey = 'your_api_key';
const sender = 'TXTLCL';
const numbers = '447123456789'; // Replace with the recipient's number
const message = 'This is your message';

const url = `https://api.txtlocal.com/send/?apikey=${apiKey}&numbers=${numbers}&message=${encodeURIComponent(message)}&sender=${sender}`;

https.get(url, (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received.
    resp.on('end', () => {
        console.log(JSON.parse(data));
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});
