const http = require('http');

// use this method of module that uses a callback with 2 parameters each is an obj and since they are paramets can call them whatever you want but convention is to call them req = incoming req and res = response is what we send back
// ie: req = client like a webbrowser is req a webpage
const server = http.createServer((req, res) => {
console.log(req); // server is waiting for a req so refresh the webpage to see this obj output to terminal
 
 res.write('Welcome to our home page')
 res.end()
});
server.listen(5000) // port server is listening on = choose one

// NOTE: This program does NOT close, its a server and never want a server to shutdown can see o/p in a browser enter: http://localhost:5000/  or just localhost:5000

// in req obj output want the url property as it tells us what url add the client is requesting.