const express=require('express');

const port=5000
const app=express();

app.get('/',(req,res)=>{
    res.send('Gaurav is now a REAL DEVOPS ENGINEER THOUGH HE IS STILL AN INTERN! NEVER MIND!!!!!!!!!!!')
})

app.listen(port,()=>{
    console.log(`App listening at port:${port}`)
})
