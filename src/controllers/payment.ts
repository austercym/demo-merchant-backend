import { Request, Response } from "express";
import { GetPisps } from "../services/PispService";
import { createPayment } from "../services/payments";
import { getByUid } from "../services/oidcHelper";
import { createJtw } from '../services/jwtHelper'

let payments: { [id: string]: any } = {};


export let create = async (req: Request, res: Response) => {
    let result = await createPayment(req.body.amount);
    console.log(result.paymentId)
    let jwt = createJtw({
        openbanking_intent_id: result.paymentId
    })
    
    //let guid = getGuidFromRedirectUri(result.redirectUri);
    payments[result.paymentId] = createUrl(jwt);
    console.log(payments);
    res.json({
        redirectUri: `http://merchant.test.orwellg.com:4002/redirect/${result.paymentId}`
    });
};

let createUrl = (jwt: String) => {
    let redirectUri = "http://merchant.test.orwellg.com/paymentcallback"

    let baseUrl = `https://identity.test.orwellg.com:9031/as/authorization.oauth2?` +
    `client_id=aspsp_client&` +
    `redirect_uri=${encodeURI(redirectUri)}&` +
    `response_type=code id_token&` +
    `scope=openid payment&` +
    `state=7b6012a05b8f4f8cb595be7fb0fd3ed6&nonce=24aa2e89e2b346388a0c83a87f5952fd&` +
    `request=${jwt}`; 
    console.log("~~~~~~~~~~~~~~~")
    console.log(baseUrl)
    console.log("~~~~~~~~~~~~~~~")
    return baseUrl

}


let getGuidFromRedirectUri = (uri: string): string => {
    let parts = uri.split("/");
    return parts[parts.length - 1];
}

export let redirect = async (req: Request, res: Response) => {
    var uid = req.params.uid;
    let jwt = createJtw({
        openbanking_intent_id: uid
    })
    console.log("**************************")
    console.log(uid)
    console.log("**************************")
    
    //console.log(createJtw({openbanking_intent_id : "9a3f0c7c-4b72-4315-ab67-1bd45019eda7"}))
    jwt =(createJtw({openbanking_intent_id : uid}))
    
    let redirectUri = createUrl(jwt);
    // console.log(payments);


    // let options = {
    //     clientId: "aspsp_client",
    //     authority: "https://identity.ipagoo.com:9031",
    //     redirectUri: "http://localhost:4200",
    //     request: createJtw({
    //         openbanking_intent_id: uid
    //     })
    // };
    // console.log(JSON.stringify(options));
    // res.render('home', options)
    //  res.redirect(redirectUri);
     res.send(`<form name="myForm" id="myForm" action="${redirectUri}" method="POST"></form><script>window.onload=() => {document.forms["myForm"].submit();} </script>`)
}