import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { EducareDataSource } from '../datasources';
import { AdminDetails, Admins, AdminsRelations } from '../models';
import { AdminDetailsRepository } from './admin-details.repository';
export declare class AdminsRepository extends DefaultCrudRepository<Admins, typeof Admins.prototype.AdminEmail, AdminsRelations> {
    protected adminDetailsRepositoryGetter: Getter<AdminDetailsRepository>;
    readonly AdminRelation: BelongsToAccessor<AdminDetails, typeof Admins.prototype.AdminEmail>;
    constructor(dataSource: EducareDataSource, adminDetailsRepositoryGetter: Getter<AdminDetailsRepository>);
}
