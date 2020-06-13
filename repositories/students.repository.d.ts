import { DefaultCrudRepository } from '@loopback/repository';
import { Students, StudentsRelations } from '../models';
import { EducareDataSource } from '../datasources';
export declare class StudentsRepository extends DefaultCrudRepository<Students, typeof Students.prototype.StudentsEmail, StudentsRelations> {
    constructor(dataSource: EducareDataSource);
}
