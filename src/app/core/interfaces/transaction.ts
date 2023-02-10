export interface Transaction {
    amount: number;
    date: Date;
    concept: string;
    type?: string;
    accountId?: number;
    userId?: number;
    to_account_id?: number;
}
