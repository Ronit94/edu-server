import { Entity } from '@loopback/repository';
export declare class Followers extends Entity {
    email: string;
    name: string;
    ProfilePicture?: string;
    following_date: string;
    adminsId?: string;
    [prop: string]: any;
    constructor(data?: Partial<Followers>);
}
export interface FollowersRelations {
}
export declare type FollowersWithRelations = Followers & FollowersRelations;
