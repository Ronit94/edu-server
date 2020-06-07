import { Entity } from '@loopback/repository';
export declare class AdminDetails extends Entity {
    AdminEmail: string;
    Address: string;
    Role: string;
    Designation: string;
    experience: number;
    constructor(data?: Partial<AdminDetails>);
}
export interface AdminDetailsRelations {
}
export declare type AdminDetailsWithRelations = AdminDetails & AdminDetailsRelations;
