const router = require("express").Router();



router.get("/", (request, response) => {
    return response.json("You are in the author api endpoint");
});


module.exports = router;