const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const users=require('./routes/users')
const exercises=require('./routes/exercises')

require('dotenv').config();

const app=express()
const port=process.env.PORT || 5000

app.use(cors())
app.use(express.json())


const uri=process.env.MONGO_URI
mongoose.connect(uri,{
    useNewUrlParser:true
})
const connection=mongoose.connection
connection.once('open',()=>{
    console.log("Connected to DB");
})
app.use('/users',users)
app.use('/exercises',exercises)

app.listen(port,console.log(`Server is listening on port : ${port}`))