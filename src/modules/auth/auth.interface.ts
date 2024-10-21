export interface TUser {
    name: string;
    email: string;
    password: string;
    mobileNumber?: string;
    role: "USER" | "ADMIN"
}