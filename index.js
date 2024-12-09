import express from 'express';
import dotenv from 'dotenv'
import productsRoute from './comments/commentsRoute.js';
import postRoute from './post/postRoute.js'
import albumRoute from './album/albumRoute.js';
import photosRoute from './photos/photosRoute.js';
import todosRoute from './todos/todosRoute.js';
import commentsRoute from './comments/commentsRoute.js';
import userRoute from './users/usersRoute.js';

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


app.use('/products',productsRoute)
app.use('/post', postRoute)
app.use('/comment',commentsRoute)
app.use('/album', albumRoute)
app.use('/photo', photosRoute)
app.use('/todo',todosRoute)
app.use('/user', userRoute)

 app.get('*',(req,res)=>{
    res.status(404).send("page not found")
 })

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is start on port ${PORT}`);
})