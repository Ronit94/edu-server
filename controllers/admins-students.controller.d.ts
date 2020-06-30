/// <reference types="express" />
import { Count, Where } from '@loopback/repository';
import { Request } from '@loopback/rest';
import { Students } from '../models';
import { AdminsRepository } from '../repositories';
import { JWTService, PasswordHasher } from '../services';
export declare class AdminsStudentsController {
    protected adminsRepository: AdminsRepository;
    jwtService: JWTService;
    passwordHasher: PasswordHasher;
    request: Request;
    constructor(adminsRepository: AdminsRepository, jwtService: JWTService, passwordHasher: PasswordHasher, request: Request);
    find(offset?: number, limit?: number, order?: string, sortOrder?: string, Gender?: string): Promise<Students[]>;
    create(students: Students): Promise<Students>;
    patch(students: Partial<Students>, where?: Where<Students>): Promise<Count>;
    delete(where?: Where<Students>): Promise<Count>;
}
