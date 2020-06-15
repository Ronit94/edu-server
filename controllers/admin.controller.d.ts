/// <reference types="express" />
import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Request } from '@loopback/rest';
import { Admins } from '../models';
import { AdminsRepository } from '../repositories';
import { PasswordHasher } from '../services/hash.password.bcryptjs';
import { JWTService } from '../services/jwt-service';
export declare class AdminController {
    adminsRepository: AdminsRepository;
    passwordHasher: PasswordHasher;
    jwtService: JWTService;
    request: Request;
    constructor(adminsRepository: AdminsRepository, passwordHasher: PasswordHasher, jwtService: JWTService, request: Request);
    create(admins: Admins): Promise<Admins>;
    count(where?: Where<Admins>): Promise<Count>;
    find(filter?: Filter<Admins>): Promise<Admins[]>;
    updateAll(admins: Admins, where?: Where<Admins>): Promise<Count>;
    login(admins: Admins, filter?: FilterExcludingWhere<Admins>): Promise<any>;
    updateById(admins: Admins): Promise<void>;
    replaceById(admins: Admins): Promise<void>;
    deleteById(id: string): Promise<void>;
    getProfile(filter?: Filter<Admins>): Promise<Admins>;
}
