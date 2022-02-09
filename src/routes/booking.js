const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticketSchema');
const axios = require('axios').default;
const User = require('../models/userSchema');

async function getRewardPoints(ticketPrice){
    return parseInt(ticketPrice*0.01*75);
}

// Book a flight ticket

router.post('/:userId/book', async (req, res) => {
    try{
        const ticket = new Ticket({
            userId : req.params.userId,
            flightId : req.body.id,
            source : req.body.src,
            destination : req.body.dest,
            dateOfTravel : req.body.date1,
            numberOfSeats : req.body.numberOfSeats,
            departuteTime : req.body.depTime,
            arrivalTime : req.body.arrTime,
            duration : req.body.duration,
            airlineCode : req.body.airlineCodes,
            airlineName : req.body.airlineName,
            totalPrice : req.body.totalPriceUsd,
            rewardPointsAdded : await getRewardPoints(req.body.totalPriceUsd)
        });

        const newTicket = await ticket.save();

        var getUser = {
            method : 'GET',
            url : `http://localhost:3001/users/${ticket.userId}`,
        }
        var userRewardPoints = await axios.request(getUser).then(async (response) => {
            return await response.data.reward_points;
        });

        var newRewardPoints = (userRewardPoints + ticket.rewardPointsAdded);
        
        var resp = await axios.patch(`http://localhost:3001/users/${ticket.userId}`,{reward_points : newRewardPoints});
        res.status(200).json(newTicket);
        
    }catch(err){
        res.status(500).json({message : err});
    }
});


// Get all tickets of a specific user

router.get('/:userId/getTickets', async (req, res) => {
    try{
        const allTickets = await Ticket.find({userId : req.params.userId}).sort([['cancelled'], ['dateOfTravel']]);
        res.status(200).json(allTickets);
    }catch(err){
        res.status(400).json({message : err});
    }
});


// Cancel a ticket

router.patch('/:userId/cancelTicket/:ticketId', async (req, res) => {
    try {
        const getUser = await User.findById(req.params.userId);
        const getTicket = await Ticket.findById(req.params.ticketId);

        // Time logic for cancelling a ticket

        var presentTime =  new Date();
        presentTime = presentTime.getTime();
        depTime = getTicket.dateOfTravel.getTime();
        remainingTime =depTime -presentTime;

        // Cannot cancel the ticket

        if(remainingTime < 100000){
            res.status(403).json({message : "This ticket cannot be cancelled anymore!!!\n Sorry for the inconvinience caused."});
            return;
        }

        if(getTicket.cancelled == true){
            res.status(200).json({message : "This ticket is already cancelled!!!"});
            return;
        }

        // Ticket will get cancelled
    
        getTicket.cancelled = true;
        var tempPoints = getTicket.rewardPointsAdded;
        tempPoints = getUser.reward_points - tempPoints;
       
        await Ticket.findByIdAndUpdate(req.params.ticketId, {cancelled : true, rewardPointsAdded: 0});

        const resp = await User.findByIdAndUpdate(req.params.userId, {reward_points : tempPoints});
        const newPoints = resp.reward_points;

        res.status(200).json({message : "Ticket Successfully Canclled!!! \n Your updated reward points is : " + newPoints});
    } catch (err) {
        res.status(400).json({message : err});
    }
});

module.exports = router;