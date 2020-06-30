/// <reference types="express" />
import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Request } from '@loopback/rest';
import { Students } from '../models';
import { StudentsRepository } from '../repositories';
import { JWTService, PasswordHasher } from '../services';
export declare class StudentsController {
    studentsRepository: StudentsRepository;
    jwtService: JWTService;
    passwordHasher: PasswordHasher;
    request: Request;
    constructor(studentsRepository: StudentsRepository, jwtService: JWTService, passwordHasher: PasswordHasher, request: Request);
    create(students: Students): Promise<Students>;
    count(where?: Where<Students>): Promise<Count>;
    find(filter?: Filter<Students>): Promise<Students[]>;
    updateAll(students: Students, where?: Where<Students>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Students>): Promise<Students>;
    updateById(id: string, students: Students): Promise<void>;
    replaceById(id: string, students: Students): Promise<void>;
    deleteById(id: string): Promise<void>;
}
