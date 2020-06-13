import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Students } from '../models';
import { StudentsRepository } from '../repositories';
export declare class StudentsController {
    studentsRepository: StudentsRepository;
    constructor(studentsRepository: StudentsRepository);
    create(students: Students): Promise<Students>;
    count(where?: Where<Students>): Promise<Count>;
    find(filter?: Filter<Students>): Promise<Students[]>;
    updateAll(students: Students, where?: Where<Students>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Students>): Promise<Students>;
    updateById(id: string, students: Students): Promise<void>;
    replaceById(id: string, students: Students): Promise<void>;
    deleteById(id: string): Promise<void>;
}
