const router = require("express").Router();



router.get("/", (request, response) => {
    return response.json("You are in the subject api endpoint");
});


module.exports = router;