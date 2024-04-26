const User = require("../models/user.model");

const fetchUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password');
        if(!users){
            res.json({error : "No User Found"})
        }
        return res.json(users);
    } catch (err) {
        return res.json({ error: err.message });
    }
};

module.exports = {fetchUsers}