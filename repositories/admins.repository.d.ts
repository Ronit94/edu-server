import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { EducareDataSource } from '../datasources';
import { AdminDetails, Admins, AdminsRelations, Projects, Students, Followers } from '../models';
import { AdminDetailsRepository } from './admin-details.repository';
import { ProjectsRepository } from './projects.repository';
import { StudentsRepository } from './students.repository';
import { FollowersRepository } from './followers.repository';
export declare class AdminsRepository extends DefaultCrudRepository<Admins, typeof Admins.prototype.AdminEmail, AdminsRelations> {
    protected adminDetailsRepositoryGetter: Getter<AdminDetailsRepository>;
    protected projectsRepositoryGetter: Getter<ProjectsRepository>;
    protected studentsRepositoryGetter: Getter<StudentsRepository>;
    protected followersRepositoryGetter: Getter<FollowersRepository>;
    readonly AdminRelation: BelongsToAccessor<AdminDetails, typeof Admins.prototype.AdminEmail>;
    readonly projects: HasManyRepositoryFactory<Projects, typeof Admins.prototype.AdminEmail>;
    readonly students: HasManyRepositoryFactory<Students, typeof Admins.prototype.AdminEmail>;
    readonly followers: HasManyRepositoryFactory<Followers, typeof Admins.prototype.AdminEmail>;
    constructor(dataSource: EducareDataSource, adminDetailsRepositoryGetter: Getter<AdminDetailsRepository>, projectsRepositoryGetter: Getter<ProjectsRepository>, studentsRepositoryGetter: Getter<StudentsRepository>, followersRepositoryGetter: Getter<FollowersRepository>);
}
