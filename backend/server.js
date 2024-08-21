const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(routes);

app.listen(8000);
