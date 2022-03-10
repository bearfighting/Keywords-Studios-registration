const express = require("express");
const routes = require("./routes");
const app = express();

app.use("/api/registration", routes.routerRegistration);

app.listen("8080", () => {
    console.log("running on http://localhost:8080");
})