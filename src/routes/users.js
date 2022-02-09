const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');

async function hashPassword(passwordInput){
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(passwordInput, salt)
    return password
}

// Create a new user, or in other words onboard a new user.

router.post('/signup', async (req, res) => {
    const userOnBoard = new User({
        name: req.body.name,
        mobile_no: req.body.mobile_no,
        email: req.body.email,
        password: req.body.password
    });
    userOnBoard.password = await hashPassword(userOnBoard.password)
    try{
        const newUser = await userOnBoard.save()
        res.status(201).json({
            userId: newUser._id,
            name : newUser.name,
            phone: newUser.mobile_no,
            reward_points: newUser.reward_points,
            email: newUser.email
        });
    }catch(err){
        res.status(409).json({message: err});
    }
});

// Login with an existing account

router.post('/login', async (req, res) => {

    const body = req.body;

    const existingUser = await User.findOne({email : body.email});

    if(existingUser){

        // Check Password with hashed password stored in DB.
        const validPassword = await bcrypt.compare(body.password, existingUser.password)        // Checking for the authenticity of the password

        if(validPassword){                                                                      // If password is valid
            // to be redirected to home screen i.e., flights search.
            res.status(200).json({
                userId: existingUser._id,
                name : existingUser.name,
                phone: existingUser.mobile_no,
                reward_points: existingUser.reward_points,
                email : existingUser.email
            });
        }

        else{                                                                                  // If password is not valid
            res.status(400).json({message: "Invalid Username or Password"});

            // Redirect to the same page.
            //router.route('/login');
        }
    }

    else{
        res.status(401).json({message: "User does not exist. Please sign up or check your details."})
        // Redirects to same page.
    }
});

// Get back a current user details.

router.get('/:userId', async (req, res) => {
    try{
        const userDetails = await User.findById(req.params.userId);
        
        res.status(200).json({
            userId: userDetails._id,
            name : userDetails.name,
            phone: userDetails.mobile_no,
            reward_points: userDetails.reward_points,
            email: userDetails.email
        });
    }catch(err){
        res.status(404).json({message: "No user found!!"});
    }

});

//Update a current user details.
// You can update Name, Phone NO, Reward Points of the user

router.patch('/:userId', async (req, res) => {
    try{
        const updateUser = await User.updateOne({_id: req.params.userId}, {$set: {
            reward_points : req.body.reward_points,
            name : req.body.name,
            mobile_no : req.body.mobile_no
        }});
        if(updateUser.acknowledged == true && updateUser.modifiedCount == 1){
            res.status(200).json({message: "Details successfully Changed"});
        }
    }catch(err){
        res.status(400).json({message: err});
    }
});

router.patch('/:userId/PassUp', async (req, res) => {
    try {
        const updatePasswordUser = await User.updateOne({_id: req.params.userId}, {$set: {password : await hashPassword(req.body.password)}});
        if(updatePasswordUser.acknowledged == true && updatePasswordUser.modifiedCount == 1){
            res.status(200).json({message: "Password successfully Changed"});
        }
    } catch (err) {
        res.status(400).json({message: err});
    }
})


module.exports = router;