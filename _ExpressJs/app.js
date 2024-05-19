const express = require('express');

const app = express();

// getting the get, post ,put ,delete methods from the server

app.get('/', (req, res) => {
    res.send("This is the home page your seeing");
})

app.get('/about',(req,res)=>{
    res.send('this is the about page your seeing');
})

app.get('/contact',(req,res)=>{
    res.send("This is the contact page thanks for the contacting with us");
})

// Route parameters

// Creating the object for the Dynamic routing
const courses = [
    {
        id: 1,
        name:'javascript'
    },
    {
        id: 2,
        name:'Java'
    },
    {
        id: 1,
        name:'React Js'
    },
]

app.get('/courses/:id',(req,res)=>{
    // res.send(req.params.id);

    const course =courses.find(course => course.id === parseInt(req.params.id));
    if(!course) res.status(404).send("The page you are trying to access is no more active or it doesnt exit's")
    res.send(course);
})

const port = process.env.PORT || 3000






app.listen(port, () => console.log(`the port is running on ${port}`));