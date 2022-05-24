/* eslint-disable no-console */
const path = require("path");

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

// req.body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use(
    cors({
        origin: [
            "http://127.0.0.1:5500",
            "http://127.0.0.1:8000",
            "http://localhost:8000",
        ],
        credentials: true,
    })
);

app.use((req, res, next) => {
    console.log(req.cookies);

    next();
});

app.get("/", (req, res, next) => {
    return res.json({ status: "success" });
});

// express will automatically recognize this as a error handling middleware because of the 4 argumnets given

module.exports = app;
