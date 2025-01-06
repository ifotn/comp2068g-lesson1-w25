// use node's http lib to run a web server
const http = require('http');
const fs = require('fs');

// create callback to handle http requests and send an http response
http.createServer((req, res) => {
    // step 1: basic http response
    //res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.end('<h1>Hello World</h1>');

    // step 2: full html page response
    fs.readFile('index.html', 'utf8', (err, fileContents) => {
        if (err) {
            console.log(err);
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(fileContents);
            res.end();
        }
    });
}).listen(3000);

console.log('Nodemon running on port 3000');