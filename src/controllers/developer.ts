import { Request, Response } from "express";
import { createJtw,createAssertion } from '../services/jwtHelper'




export let createJwt = async (req: Request, res: Response) => {
    let paymentId = req.params.paymentid;
    console.log("payment id", paymentId)
    
    res.json({
        jwt:  createJtw({
            openbanking_intent_id: paymentId
        })
    })
    
}    

export let createJwtAssertion = async (req: Request, res: Response) => {
    let paymentId = req.params.paymentid;
    console.log("payment id", paymentId)
    res.json({
        jwt:  createAssertion({
            aud: "https://145.239.195.90:9031/as/token.oauth2",
            exp: Math.round((new Date(Date.now() + 60000)).getTime()/1000),
            iss: "raj"
        })
    })
    
}    