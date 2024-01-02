const express =require('express');
const dotenv= require('dotenv');
const connectedToDb = require('./database/db');
const cors= require('cors');
const app =express();
dotenv.config();
connectedToDb();

const corsOptions={
    origin:true,
    credentials:true,
    optionaSuccessStatus:200,
}
app.use(cors(corsOptions));



app.use(express.json());

app.use('/api/user',require('./routes/userRoute'))

app.get('/hello',(req,res)=>{
    // res.send("Hello Route")
    res.status(200).json("Hello World!")
})
app.get("/test",(req,res)=>{
    res.send("hello from server")
 })

 const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`listening to port: ${PORT}`)
})