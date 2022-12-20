import { Role } from './role';
export class User {
    userId!: Number;
    firstName!: string;
    lastName!: string;
    emailId!: string;
    mobileNo!: string;
    address!: string;
    address2!: string;
    city!: string;
    state!: string;
    pincode!: string;
    photo!: string;
    role!: Role;
}
