// using http module (inbuilt given by node ) we can setup server

const http= require('http');
const PORT = 3000;

/*
-> HTTP Module create a function called as createServer
-> this createServer function takes a callback as the input
-> Now inside the Callback, we get two arguments
 1) request -> this argument contain all the details about the incoming req
 2) response -> thie argument contain function using which we can prepare the response

 the create function return a server object 
*/

const server = http.createServer(function exec(request, response){
        if(request.url=== '/home')
         response.end("Welcome to the home");
        else if(request.url==='/faq')
            response.end("List of FAQs");
       else 
         response.end("hello wrold");
    //    response.end("hello world");
});

server.listen(PORT, function process(){
    // once the server has started then this callback will be executed
    console.log("Server started on port", PORT);
}); 