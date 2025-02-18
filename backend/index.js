// import express from "express";
// // import cors from "cors";
// // import dotenv from "dotenv";
//  import dotenv from "dotenv";

// dotenv.config();

// const app = express();

// app.use(express.json());



// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})