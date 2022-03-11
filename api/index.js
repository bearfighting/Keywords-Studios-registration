const express = require("express");
const routes = require("./routes");
const app = express();

const cors = require('cors')
app.use(cors());

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api/registration", routes.routerRegistration);

app.listen("8080", () => {
    if (process.env.NODE_ENV === 'production') {
        console.log('production');
    }
    console.log("running on http://localhost:8080");
})