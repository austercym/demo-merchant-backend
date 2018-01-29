export interface PaymentSubmissionResponse {
    CreatedAt : Date,
    Links : any[],
    PaymentId: string,
    PaymentSubmissionId: string,
    Status: string // todo : convert to enum
}
  