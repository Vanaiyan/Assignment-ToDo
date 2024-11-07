const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const taskRouter = require("./routes/taskRotes")

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.use("/task", taskRouter);

app.listen(process.env.PORT, () => console.log("Server is running"));