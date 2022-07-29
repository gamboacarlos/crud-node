import express from "express";
import {mongoDBConnection} from './database/mongoDBConnection'
const app = express();
const cors = require('cors')
const productsRouter = require('./routes/productsRoutes')
const PORT = 3001;

// Middlewares //////
app.use(cors());
app.use(express.json());
app.use("/api/v1", productsRouter);

// API setup //////
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// DB connection //////
mongoDBConnection()

