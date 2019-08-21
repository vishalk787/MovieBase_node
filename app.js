let http = require('http');
let url = require('url');
let fs = require('fs');
function renderHTML (path, response) {
    fs.readFile(path, null, function(error, data){
        if (error){
            response.writeHead(404);
            response.write('File not found');
        } else {
            response.write(data);
        }
        response.end()
    })
}

 function handleRequest (reqest, response) {
    response.writeHead (200, {'content-Type': 'text/html'});
    let data = url.parse(reqest.url);
    let path = url.parse(reqest.url).pathname;
    switch (path){
        case '/': renderHTML('./home.html', response);
        break;
        default:  renderHTML('./details.html', response);
    }
}

http.createServer(handleRequest).listen(8000);