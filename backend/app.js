const express = require('express')
const cors = require('cors')
const logger = require('morgan')//for seeing api calls in terminal
const port=  8524

const app = new express()

require('./middleware/mongodb')

app.use(cors())//to connect frnt end and backend without disturbance
app.use(express.json())// to recieve data from frntend
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))


//API 

 const api = require('./routes/api')
 app.use('/api',api)
 


//server code

app.listen(port,()=>{
    console.log(`..server is connected to ${port}`)

})