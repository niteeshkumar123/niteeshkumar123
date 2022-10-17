require('dotenv').config()

const express=require('express')
const cors=require('cors')
const path=require('path')
const assert=require('assert')
const taskRoute=require('./route/taskRoute')
const connectDb=require('./db/connect')

const port = process.env.PORT || Number(5000)

const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors())

//views engines
app.set('view engine','ejs')
app.set('views','./views')

//default route
app.use('/',taskRoute)

//pnf route
app.all(`*`,(req,res)=>{
    res.render('pnf')
})

//server call
app.listen(port,()=>{
    connectDb()
    console.log(`server is running @http://localhost:${port}`);
})