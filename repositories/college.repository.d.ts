import { DefaultCrudRepository } from '@loopback/repository';
import { College, CollegeRelations } from '../models';
import { EducareDataSource } from '../datasources';
export declare class CollegeRepository extends DefaultCrudRepository<College, typeof College.prototype.College_ID, CollegeRelations> {
    constructor(dataSource: EducareDataSource);
}
