const express = require('express')
const mongoose = require('mongoose');
const routes=require('./routes/toDoRoutes')
const cors=require('cors')
require('dotenv').config()

const app = express()
const Port = process.env.port || 5000;

app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONOGE_URL)
    .then(() => console.log(`connected to mongoseDb...`)).catch((err) => console.log(err))

app.use(routes)

app.listen(Port, () => console.log(`app is listen on port ${Port}`))