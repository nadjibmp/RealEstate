const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
const indexRouter = require("./routes/index");
const path = require("path");
const app = express();
const store = new session.MemoryStore();
const bodyParser = require("body-parser");

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//preventing cors error 
const whitelist = ['http://localhost:3000', 'http://localhost:3000/'];
const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    if(whitelist.includes(origin))
      return callback(null, true)

      callback(new Error('Not allowed by CORS'));
  }
}

app.use(cors(corsOptions));

// Initialize a session
app.use(
  session({
    name: "user_session",
    secret: process.env.SESSION_TOKEN,
    saveUninitialized: false,
    resave: false,
    store,
    cookie: {
      maxAge: parseInt(process.env.SESSION_MAX_AGE),
      secure: false,
    },
  })
);

app.use("/api", indexRouter);

module.exports = app;
