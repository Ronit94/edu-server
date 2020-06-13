/// <reference types="express" />
import { Count, Filter, Where } from '@loopback/repository';
import { Request } from '@loopback/rest';
import { Admins, Followers } from '../models';
import { AdminsRepository } from '../repositories';
import { JWTService } from '../services';
export declare class AdminsFollowersController {
    protected adminsRepository: AdminsRepository;
    jwtService: JWTService;
    request: Request;
    constructor(adminsRepository: AdminsRepository, jwtService: JWTService, request: Request);
    find(filter?: Filter<Followers>): Promise<Followers[]>;
    create(id: typeof Admins.prototype.AdminEmail, followers: Omit<Followers, 'email'>): Promise<Followers>;
    patch(id: string, followers: Partial<Followers>, where?: Where<Followers>): Promise<Count>;
    delete(id: string, where?: Where<Followers>): Promise<Count>;
}
