import express from "express";
import { APPLICATION_CONSTANTS } from "../common/constants.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.post('/validateUser', (req,res) => {
    
    let jwtSecretKey = process.env.JWT_SECRET_KEY

    try{
        let accessToken = req.body.accessToken;
        const verified = jwt.verify(accessToken, jwtSecretKey);
        if(verified){
            return res.send(
                {
                    message: APPLICATION_CONSTANTS.JWT_VERIFIED
                }
            );
        }else{
            return res.status(401).send(error);
        }
    }catch(error){
        return res.status(401).send(error);
    }
    
})

export default router;