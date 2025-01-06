// const express = require("express")
// const app = express()
// // env files
// const dotenv = require("dotenv");
// dotenv.config();
// // import database
// const db = require('./config/db');
// const PORT = process.env.PORT || 5000;
// // cors
// const cors = require('cors');
// app.use(cors())
// // routes import
// const userRoutes = require("./routes/userroutes");
// const surveyRoutes = require("./routes/survey");


// // middleware
// app.use(express.json());
// app.use("/api/users", userRoutes);
// app.use("/api/surveys", surveyRoutes);


// // home route
// app.use("/",(req,res)=>{
//     res.json({ message: "Welcome to HomePage" });
//  })
// //  listen port
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require("express");
const app = express();
// import database
const db = require('./config/db');
const PORT = process.env.PORT || 5000;
// cors
const cors = require('cors');

// CORS setup with the production URL directly specified
const corsOptions = {
  origin: 'https://surveysphere.tech',  // Replace with your production domain
  methods: "GET,POST,PUT,DELETE",              // Allowed HTTP methods
  allowedHeaders: "Content-Type",              // Allowed headers
};

app.use(cors(corsOptions));  // Apply CORS settings

// routes import
const userRoutes = require("./routes/userroutes");
const surveyRoutes = require("./routes/survey");

// middleware
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/surveys", surveyRoutes);

// home route
app.use("/", (req, res) => {
  res.json({ message: "Welcome to HomePage" });
});

// listen port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
