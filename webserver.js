const http1=require('http');

const webserver=http1.createServer((req,res)=>{
    res.end("hello bhuvan soker");
});

webserver.listen(3500,()=>{
    console.log("the current server running in http://localhost:3500");
});
