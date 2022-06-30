const {contactUs} = require("../models")

const createContactUsCntrl = async(req,res) =>{
    const {Name, email, requirements , phone} = req.body
    let result = await contactUs.create({Name,email,requirements,phone})
console.log("contactus");
    res.status(200).json({
        message: "created successfully",
        data: result
    })
}
const getData = async(req,res) =>{

console.log("contactus");
    res.status(200).json({
        message: "created successfully",
    })
}

module.exports = {
    createContactUsCntrl,
    getData
}