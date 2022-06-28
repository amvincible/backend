const {contactUs} = require("../models")

const createContactUsCntrl = async(req,res) =>{
    const {Name, email, requirements , phone} = req.body
    let result = await contactUs.create({Name,email,requirements,phone})

    res.status(200).json({
        message: "created successfully",
        data: result
    })
}

module.exports = {
    createContactUsCntrl
}