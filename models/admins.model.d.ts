import { Entity } from '@loopback/repository';
export declare class Admins extends Entity {
    College_ID: string;
    College_Name: string;
    AdminEmail: string;
    College_state: string;
    AdminName: string;
    AdminMobNo: string;
    adminPassword: string;
    ProfilePicture: string;
    createdAt: string;
    updatedAt: string;
    adminDetailsId: string;
    [prop: string]: any;
    constructor(data?: Partial<Admins>);
}
export interface AdminsRelations {
}
export declare type AdminsWithRelations = Admins & AdminsRelations;
