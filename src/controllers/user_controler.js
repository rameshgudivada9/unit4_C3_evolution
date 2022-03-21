const express=require("express");

const { body, validationResult } = require('express-validator');


const User=require("../models/user_model");
const router =express.Router();

router.post("/",body(),
body('age').isNumeric().custom((value)=>{{
    if(value>0 || value<150){
        throw new Error("incorrect age");
    }
    return true;
}}),
async(req,res)=>{
try {
    // console.log(body('age')    )
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user=await User.create(req.body)

    return res.status(201).send(user);
} catch (error) {
    return res.status(500).send(error.message)
}
})


module.exports=router;