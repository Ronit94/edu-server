import { Entity } from '@loopback/repository';
export declare class College extends Entity {
    College_ID: string;
    College_Name: string;
    address: string;
    College_state: string;
    constructor(data?: Partial<College>);
}
export interface CollegeRelations {
}
export declare type CollegeWithRelations = College & CollegeRelations;
