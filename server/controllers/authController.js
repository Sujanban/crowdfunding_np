const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const validator = require('email-validator')
const test = (req,res) => {
    res.json('test is working')
}

const handleRegister = async (req,res) => {
    try {
        
        const { firstName, lastName, email, password } = req.body;
        if(!firstName || !lastName || !email || !password){
            return res.json({error: 'All fields are required'});
        }
        const isValid = validator.validate(email);
        if(!isValid){
            return res.json({error: 'Email is not valid'});
        }
        if(password.length < 6){
            return res.json({error: 'Password must be at least 6 characters'});
        }
        let existUser = await User.findOne({email});
        if(existUser){
            return res.json({error: 'User already exist'});
        }

        const hashPassword = await bcrypt.hash(password, 10);
        

        const newUser = new User({firstName,lastName,email,password: hashPassword});
        await newUser.save();
        res.json({message: 'User created successfully'});
    } catch (err) {
        res.json(console.log(err));        
    }

}

module.exports = {
    test,
    handleRegister
}