import { Entity } from '@loopback/repository';
export declare class Students extends Entity {
    StudentsName: string;
    StudentsEmail: string;
    College_Name: string;
    College_state: string;
    College_ID?: string;
    AdminEmail: string;
    adminsId?: string;
    constructor(data?: Partial<Students>);
}
export interface StudentsRelations {
}
export declare type StudentsWithRelations = Students & StudentsRelations;
