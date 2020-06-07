import { DefaultCrudRepository } from '@loopback/repository';
import { AdminDetails, AdminDetailsRelations } from '../models';
import { EducareDataSource } from '../datasources';
export declare class AdminDetailsRepository extends DefaultCrudRepository<AdminDetails, typeof AdminDetails.prototype.AdminEmail, AdminDetailsRelations> {
    constructor(dataSource: EducareDataSource);
}
