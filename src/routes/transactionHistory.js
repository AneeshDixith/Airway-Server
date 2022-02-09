const express = require('express');
const router = express.Router();
const Transactions = require('../models/transactionSchema');


// Get transaction details of a user.

router.get('/:userId', async (req, res) => {
    try{
        const transactions = await Transactions.find({"User_id": req.params.userId});
        res.json(transactions);
    }catch(err){
        res.json({message : err});
    }
});


//Post to transactions

router.post('/:userId', async (req, res) => {
    const transaction = new Transactions({
        trxn_amt: req.body.trxn_amt,
        trxn_status: req.body.trxn_status,
        pnr : req.body.pnr,
        number_of_seats: req.body.number_of_seats,
        User_id: req.params.userId
    });
    try{
        const newTrxn = await transaction.save()
        res.json(newTrxn);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;