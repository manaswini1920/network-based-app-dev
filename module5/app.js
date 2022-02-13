const express = require('express');
const app=express();
const port = 3000;
const host='localhost';
const {v4:uuidv4}=require('uuid');
const ejs=require('ejs')

app.use(express.static('public'))
app.set('view engine','ejs')
//router
let students =[
   
]

app.use(express.urlencoded({extended:true}));

app.get('/students/create',(req,res)=>{
    res.sendFile('./views/new.html',{root:__dirname});
});

app.post('/students',(req,res)=>{
    let student=req.body;
    student.id=uuidv4();
    students.push(student);
    res.redirect('/students')
});

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
    res.send('home page ');
    console.log(req.url);
    console.log(req.query);
});

app.get('/students',(req,res)=>{
    res.render('students',{students:students});
});
app.get('/students/:sid',(req,res)=>{
    let id = req.params.sid;
    let student = students.find(element=>element.id===id)
    res.render('student',{student:student})
});
app.listen(port,host,()=>{
console.log('server is running at port',port);
});