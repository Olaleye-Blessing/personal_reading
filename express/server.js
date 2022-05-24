process.on("uncaughtException", () => {
    console.log("Uncaught Exception....");
    console.log("server is shutting down 🔥🔥🔥🔥🔥🔥");
    // console.log(err.name, err.message);

    process.exit(1);
});

const app = require("./app");

const port = 2000;

const server = app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

// these are mostly rejection from promise
process.on("unhandledRejection", (err) => {
    console.log("Unhandled Rejection....");
    console.log("server is shutting down 🔥🔥🔥🔥🔥🔥");
    console.log(err.name, err.message);

    // close server when all requests are done
    server.close(() => {
        process.exit(1);
    });
});
