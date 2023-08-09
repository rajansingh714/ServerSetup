const express= require('express');

const app= express();
const PORT= 30005;

app.get('/',function(req,res){
    res.send("HELLO WORLD");
});

app.post('/home',function(req,res){
    res.send("Wecome to the world")
})

app.put('/home/bihar',function(req,res){
    res.send("Good Coder");
})

app.patch('/home',function(req,res){
    res.send("express server is complete");
}) 



app.listen(PORT,function process(){
    console.log(`SERVER PORT NUMBER IS ${PORT}`)
})