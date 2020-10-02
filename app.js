const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const subjectAPI = require("./api/subject.api");
const bookAPI = require("./api/book.api");
const authorAPI = require("./api/author.api");


app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", (request, response) => {
    return response.json("Welcome to CodeIt Bookstore");
});


app.use("/api/subjects", subjectAPI);
app.use("/api/books", bookAPI);
app.use("/api/authors", authorAPI);


app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`))