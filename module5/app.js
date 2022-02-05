const express = require('express');
const app=express();
const port = 3000;
const host='localhost';
//router
app.get('/',(req,res)=>{
    res.send('home page ')
});
app.listen(port,host,()=>{
console.log('server is running at port',port);
});