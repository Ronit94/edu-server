import { DefaultCrudRepository } from '@loopback/repository';
import { Followers, FollowersRelations } from '../models';
import { EducareDataSource } from '../datasources';
export declare class FollowersRepository extends DefaultCrudRepository<Followers, typeof Followers.prototype.email, FollowersRelations> {
    constructor(dataSource: EducareDataSource);
}
