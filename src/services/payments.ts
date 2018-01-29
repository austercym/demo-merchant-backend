import * as Request from 'request'
import { Payment } from "../models/payment/payment";
import { getRedirectUri } from "./oidcHelper"

export let createPayment = async (amount: number): Promise<any> => {
    //let redirectUri = await getRedirectUri();
    return new Promise<any>((resolve, reject) => {
        Request.post("http://147.135.194.30:8080/payment", {
            json: <any>{
                data: {
                    creationDateTime: Date(),
                    initiation: {
                        instructedAmount: {
                            amount: amount,
                            currency: "EUR"
                        },
                        creditorAccount: {
                            schemeName : "IBAN",
                            identification: "ES2567060001800001000103",
                            name: "Lufthansa"
                        },
                        remittanceInformation: {
                            reference : "Flight to China"
                        }
                    }
                }
            }
        }, (err, res) => {
            console.log(res);
            console.log(err);
            
            console.log(res.body.Data.PaymentId);
            resolve({
                redirectUri: "",
                paymentId: res.body.Data.PaymentId
            });
        });
    })
}