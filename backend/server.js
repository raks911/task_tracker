const express=require("express");

const app =express();
const dotenv=require('dotenv');
const notes=require("./data/notes");

dotenv.config();
app.get('/',(req,res)=>{
    
    res.send("API IS RUNNING!!")
})

app.get('/api/notes/:id',(req,res)=>{
    const note=notes.filter( n =>{
        return n._id===req.params.id;
    })
    res.send(note);
})

app.get('/api/notes',(req,res)=>{
    res.json(notes)
})

const PORT=process.env.PORT || 4000;
app.listen(PORT,console.log(`port started at ${PORT}`));