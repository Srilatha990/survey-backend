const express = require("express")
const app = express()
// env files
const dotenv = require("dotenv");
dotenv.config();
// import database
const db = require('./config/db');
const PORT = process.env.PORT || 5000;
// cors
const cors = require('cors');
app.use(cors())
// routes import
const userRoutes = require("./routes/userroutes");
const surveyRoutes = require("./routes/survey");


// middleware
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/surveys", surveyRoutes);


// home route
app.use("/",(req,res)=>{
    res.json({ message: "Welcome to HomePage" });
 })
//  listen port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
