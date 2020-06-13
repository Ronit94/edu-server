import { Entity } from '@loopback/repository';
export declare class Projects extends Entity {
    name: string;
    url: string;
    author: string;
    collaborations: string[];
    likes: number;
    hooks: number;
    adminsId?: string;
    constructor(data?: Partial<Projects>);
}
export interface ProjectsRelations {
}
export declare type ProjectsWithRelations = Projects & ProjectsRelations;
