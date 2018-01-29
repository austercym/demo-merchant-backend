import { CreditorAccount } from "../models/creditorAccount";
import { CreditorAgent } from "../models/creditorAgent";
import { DebtorAccount } from "../models/debtorAccount";
import { DebtorAgent } from "../models/debtorAgent";

export interface PaymentSubmission {
    CreditorAccount: CreditorAccount,
    CreditorAgent: CreditorAgent,
    DebtorAccount: DebtorAccount,
    DebtorAgent: DebtorAgent,
    EndToEndIdentification: string,
    InstructionIdentification: string,
    PaymentId: string    
}
