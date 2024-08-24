const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const routes = require("./routes");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
