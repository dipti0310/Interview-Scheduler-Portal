const connectToMongo =require("./db");
const express = require('express')
var cors = require('cors') 


const app = express()
const port = 5000

app.use(cors())
app.use(express.json())


connectToMongo();

// Available routes
app.use('/user',require('./routes/user'));
app.use('/interview',require('./routes/interview'))


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})