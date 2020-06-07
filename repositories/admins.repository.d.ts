import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Admins, AdminsRelations, AdminDetails } from '../models';
import { EducareDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { AdminDetailsRepository } from './admin-details.repository';
export declare class AdminsRepository extends DefaultCrudRepository<Admins, typeof Admins.prototype.AdminEmail, AdminsRelations> {
    protected adminDetailsRepositoryGetter: Getter<AdminDetailsRepository>;
    readonly AdminRelation: BelongsToAccessor<AdminDetails, typeof Admins.prototype.AdminEmail>;
    constructor(dataSource: EducareDataSource, adminDetailsRepositoryGetter: Getter<AdminDetailsRepository>);
}
