import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { College } from '../models';
import { CollegeRepository } from '../repositories';
import { PasswordHasher } from '../services/hash.password.bcryptjs';
export declare class CoreController {
    collegeRepository: CollegeRepository;
    passwordHasher: PasswordHasher;
    constructor(collegeRepository: CollegeRepository, passwordHasher: PasswordHasher);
    create(college: College): Promise<College>;
    count(where?: Where<College>): Promise<Count>;
    find(filter?: Filter<College>): Promise<College[]>;
    updateAll(college: College, where?: Where<College>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<College>): Promise<College>;
    updateById(id: string, college: College): Promise<void>;
    replaceById(id: string, college: College): Promise<void>;
    deleteById(id: string): Promise<void>;
}
