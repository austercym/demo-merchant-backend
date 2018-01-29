import { PaymentInitiation } from "../payment/initiation";

export interface PaymentSetupResponse {
    CreationDateTime: Date,
    Initiation: PaymentInitiation   
}