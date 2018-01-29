import { CreditorAccount } from "../creditorAccount";
import { CreditorAgent } from "../creditorAgent";
import { DebtorAccount } from "../debtorAccount";
import { DebtorAgent } from "../debtorAgent";
import { Amount } from "./amount";

export interface PaymentInitiation {
    CreditorAccount?: CreditorAccount
    CreditorAgent?: CreditorAgent,
    DebtorAccount?: DebtorAccount
    DebtorAgent?: DebtorAgent,
    EndToEndIdentification?: string,
    Amount: Amount ,
    InstructionIdentification?: string
}