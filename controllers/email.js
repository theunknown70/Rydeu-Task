import express from 'express';

import LocationSchema from '../models/locationSchema.js';

const router = express.Router();

export const getAmount = async (req, res) => {
    const {city, start, end} = req.body;

    if(!city){
        res.json({email: true});
        return;
    }else if(city=='london' || city=='paris'){
        res.json({email: false});
        return;
    }

    // Since, GeoCoding API required credit card to use, I used Mock Distance.
    const distance = Math.floor(Math.random() * (1100 - 1 + 1)) + 1;
    if(distance>1000){
        res.json({error_m: "Too far to offer ride"});
        return;
    }else if(distance>30){
        res.json({email: true});
        return;
    }

    const amountPerKM = await LocationSchema.find({city: city});
    const totalPrice = distance * amountPerKM;
    if(totalPrice<50){
        res.json({email: true});
        return;
    }

    res.json({email: false});
}

export default router;