const express = require('express');
const Router = require('./routes/index');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/api',Router);
// const courses = [{id:"1", name : "Course1"},
// {id:"2", name : "Course2"},
// {id:"3", name : "Course3"}
// ]
// app.get('/',(req , res)=> {
// res.send(courses);

// });
// app.get('/api/:id',(req , res)=> {
//     const course = courses.find(c=> c.id === req.params.id );
//     console.log(req.params.id);
//     if(!course){ res.status(404).send(`Not found`);
//     }
//     else{
//         res.send(course);
//     }
   
    
// });

// app.post('/api/courses',(req,res)=>{
//     const course = {
//         id:courses.length+1, 
//         name : req.body.name}
//     console.log(course);
//     courses.push(course);
//     res.send(course);
   

// });

// app.patch('/api/:id',(req , res)=> {
//     const course = courses.find(c=> c.id === req.params.id );
//     console.log(req.params.id);
//     if(!course){ res.status(404).send(`Not found`);
//     }
//     else{

//         course.name= req.body.name;
//         res.send(course);
//     }
   
    
// });




app.listen(port,()=>{

    console.log(`Listening to port ${port}`);
});