const express = require('express')
const cors = require("cors");
const conatctus = require("./routes/contactus")
const env =require("dotenv")
env.config({path:"./config/.env"})

const app = express()
app.use(express.json());
app.use(cors());

app.use("/api",conatctus);

app.get('/')
app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`))