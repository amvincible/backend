const { createContactUsCntrl, getData } = require("../controller/contactUsController");

const router = require("express").Router();

router 
    .route("/contact")
    .post(createContactUsCntrl)
router 
    .route("/contact")
    .get(getData)



module.exports = router