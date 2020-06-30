import { Entity } from '@loopback/repository';
export declare class Students extends Entity {
    StudentsName: string;
    StudentsEmail: string;
    College_Name: string;
    College_state: string;
    StudentMobile: string;
    Gender: string;
    Semester: number;
    Year: number;
    College_ID?: string;
    adminsId?: string;
    constructor(data?: Partial<Students>);
}
export interface StudentsRelations {
}
export declare type StudentsWithRelations = Students & StudentsRelations;
