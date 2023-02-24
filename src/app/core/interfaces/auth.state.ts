import { User } from "./user";

export interface AuthState {
    loading: boolean;
    user: User;
    token: any;
    error: any;
}