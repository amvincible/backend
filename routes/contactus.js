const { createContactUsCntrl } = require("../controller/contactUsController");

const router = require("express").Router();

router 
    .route("/contact")
    .post(createContactUsCntrl)



module.exports = router