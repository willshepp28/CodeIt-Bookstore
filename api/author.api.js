const router = require("express").Router();
const models = require("../db/models")


router.get("/", (request, response) => {
    return response.json("You are in the author api endpoint");
});


// get all authors
router.get("/getAllAuthors", (request, response) => {
    models.Author.findAll()
        .then((author) => {
            return response.status(200).json(author);
        })
        .catch(error => response.status(400).json(error));
});


// get author by id
router.get("/getAuthor/:id", (request, response) => {

    models.Author.findOne({
        where: { id: request.params.id || request.body.id }
    })
    .then((author) =>  response.status(200).json(author))
    .catch(error => response.status(400).json(error));
});





module.exports = router;