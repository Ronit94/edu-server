import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Projects } from '../models';
import { ProjectsRepository } from '../repositories';
export declare class ProjectsController {
    projectsRepository: ProjectsRepository;
    constructor(projectsRepository: ProjectsRepository);
    create(projects: Projects): Promise<Projects>;
    count(where?: Where<Projects>): Promise<Count>;
    find(filter?: Filter<Projects>): Promise<Projects[]>;
    updateAll(projects: Projects, where?: Where<Projects>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Projects>): Promise<Projects>;
    updateById(id: string, projects: Projects): Promise<void>;
    replaceById(id: string, projects: Projects): Promise<void>;
    deleteById(id: string): Promise<void>;
}
