require("dotenv").config();
const express = require("express");
// const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/usersRoute.js");
const authRoute = require("./routes/authRoute.js");

const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5001;

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("common"));

app.use("/users", userRoute);
app.use("/auth", authRoute);
// const server = require('http').createServer(app);
// const io = require('socket.io')(server, {
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET, POST']
//   }
// })

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("connected to mongoDB")
);

app.listen(PORT, () => {
  console.log(`server runs on port ${PORT}`);
});
