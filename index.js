import express from 'express';
import dotenv from 'dotenv'
import comments from './comments.js';
import productsRoute from './routes/productsRoute.js';
const app = express();
dotenv.config();


app.get('/',(req,res)=>{
   res.status(200).send("welcome to backend")
})


app.get('/profiles',(req,res)=>{
    res.status(200).send("welcome to my profiles")
 })

 app.get('/products/:id',(req,res)=>{
     const  id = req.params.id;
     res.status(200).send(`welcome to user ${id}`)
 })

 app.get('/users',(req,res)=>{
     res.status(200).send("welcome to users page")
 })

 app.get('/comments',(req,res)=>{
     res.status(200).send({status:"logged in", message:"your data",data:comments})
 })

 app.use('/products',productsRoute)

 app.get('*',(req,res)=>{
    res.status(404).send("page not found")
 })

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is start on port ${PORT}`);
})