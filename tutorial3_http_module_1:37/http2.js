const http = require('http');

// use this method of module that uses a callback with 2 parameters each is an obj and since they are paramets can call them whatever you want but convention is to call them req = incoming req and res = response is what we send back
// ie: req = client like a webbrowser is req a webpage
const server = http.createServer((req, res) => {
 if (req.url === '/') { // for homepage practice is to use / = forward slash
   res.end('Welcome to our home page')
 }
 if (req.url === '/about') { // all web pages have about
   res.end('Here is our story')
 }
 // if req a page within the website that does not exist ie: localhost:5000/about
 res.end(` 
   <h1>oops!</h1>
   <p>Cant find page you request</p>
   <a href="/">back to home page</a>
 `)
})
server.listen(5000) // port server is listening on = choose one

// NOTE: This program does NOT close, its a server and never want a server to shutdown can see o/p in a browser enter: http://localhost:5000/  or just localhost:5000

// in req obj output want the url property as it tells us what url add the client is requesting. 

/*
Note: error code: 'ERR_STREAM_WRITE_AFTER_END' so can only enter a web add once
    tried with write instead of end but it did not help
    interesting how he was able to continue to enter any add
*/