const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

// This below line loads environment variables from a .env file into process.env.
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1/tasks', tasks)
const port = process.env.PORT || 3000;
// process.env.MONGO_URI retrieves the MongoDB connection string from environment variables.
// MONGO_URI is a env variable here
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`hey we are listening on ${port}...`))
    }catch(error){
        console.log(error);
    }
}
start()
