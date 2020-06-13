import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { EducareDataSource } from '../datasources';
import { Admins, Projects, ProjectsRelations } from '../models';
import { AdminsRepository } from './admins.repository';
export declare class ProjectsRepository extends DefaultCrudRepository<Projects, typeof Projects.prototype.name, ProjectsRelations> {
    protected adminsRepositoryGetter: Getter<AdminsRepository>;
    readonly AuthorEmail: HasManyRepositoryFactory<Admins, typeof Projects.prototype.name>;
    constructor(dataSource: EducareDataSource, adminsRepositoryGetter: Getter<AdminsRepository>);
}
