import { Count, Filter, Where } from '@loopback/repository';
import { Projects, Admins } from '../models';
import { ProjectsRepository } from '../repositories';
export declare class ProjectsAdminsController {
    protected projectsRepository: ProjectsRepository;
    constructor(projectsRepository: ProjectsRepository);
    find(id: string, filter?: Filter<Admins>): Promise<Admins[]>;
    create(id: typeof Projects.prototype.name, admins: Omit<Admins, 'AdminEmail'>): Promise<Admins>;
    patch(id: string, admins: Partial<Admins>, where?: Where<Admins>): Promise<Count>;
    delete(id: string, where?: Where<Admins>): Promise<Count>;
}
