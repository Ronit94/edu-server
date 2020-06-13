/// <reference types="express" />
import { Count, Filter, Where } from '@loopback/repository';
import { Request } from '@loopback/rest';
import { Admins, Projects } from '../models';
import { AdminsRepository } from '../repositories';
import { JWTService } from '../services';
export declare class AdminsProjectsController {
    protected adminsRepository: AdminsRepository;
    jwtService: JWTService;
    request: Request;
    constructor(adminsRepository: AdminsRepository, jwtService: JWTService, request: Request);
    find(filter?: Filter<Projects>): Promise<Projects[]>;
    create(id: typeof Admins.prototype.AdminEmail, projects: Projects): Promise<Projects>;
    patch(id: string, projects: Partial<Projects>, where?: Where<Projects>): Promise<Count>;
    delete(id: string, where?: Where<Projects>): Promise<Count>;
}
