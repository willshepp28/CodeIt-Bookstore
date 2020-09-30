const { response } = require("express");

const router = require("express").Router();


router.get("/", (request, response) => {
    return response.json("You are in the book api endpoint");
});


module.exports = router;