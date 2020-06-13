"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProjectsController = /** @class */ (() => {
    let ProjectsController = class ProjectsController {
        constructor(projectsRepository) {
            this.projectsRepository = projectsRepository;
        }
        async create(projects) {
            return this.projectsRepository.create(projects);
        }
        async count(where) {
            return this.projectsRepository.count(where);
        }
        async find(filter) {
            return this.projectsRepository.find(filter);
        }
        async updateAll(projects, where) {
            return this.projectsRepository.updateAll(projects, where);
        }
        async findById(id, filter) {
            return this.projectsRepository.findById(id, filter);
        }
        async updateById(id, projects) {
            await this.projectsRepository.updateById(id, projects);
        }
        async replaceById(id, projects) {
            await this.projectsRepository.replaceById(id, projects);
        }
        async deleteById(id) {
            await this.projectsRepository.deleteById(id);
        }
    };
    tslib_1.__decorate([
        rest_1.post('/projects', {
            responses: {
                '200': {
                    description: 'Projects model instance',
                    content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Projects) } },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Projects, {
                        title: 'NewProjects',
                    }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [models_1.Projects]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ProjectsController.prototype, "create", null);
    tslib_1.__decorate([
        rest_1.get('/projects/count', {
            responses: {
                '200': {
                    description: 'Projects model count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.where(models_1.Projects)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ProjectsController.prototype, "count", null);
    tslib_1.__decorate([
        rest_1.get('/projects', {
            responses: {
                '200': {
                    description: 'Array of Projects model instances',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: rest_1.getModelSchemaRef(models_1.Projects, { includeRelations: true }),
                            },
                        },
                    },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.filter(models_1.Projects)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ProjectsController.prototype, "find", null);
    tslib_1.__decorate([
        rest_1.patch('/projects', {
            responses: {
                '200': {
                    description: 'Projects PATCH success count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Projects, { partial: true }),
                },
            },
        })),
        tslib_1.__param(1, rest_1.param.where(models_1.Projects)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [models_1.Projects, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ProjectsController.prototype, "updateAll", null);
    tslib_1.__decorate([
        rest_1.get('/projects/{id}', {
            responses: {
                '200': {
                    description: 'Projects model instance',
                    content: {
                        'application/json': {
                            schema: rest_1.getModelSchemaRef(models_1.Projects, { includeRelations: true }),
                        },
                    },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.param.filter(models_1.Projects, { exclude: 'where' })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ProjectsController.prototype, "findById", null);
    tslib_1.__decorate([
        rest_1.patch('/projects/{id}', {
            responses: {
                '204': {
                    description: 'Projects PATCH success',
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Projects, { partial: true }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, models_1.Projects]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ProjectsController.prototype, "updateById", null);
    tslib_1.__decorate([
        rest_1.put('/projects/{id}', {
            responses: {
                '204': {
                    description: 'Projects PUT success',
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.requestBody()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, models_1.Projects]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ProjectsController.prototype, "replaceById", null);
    tslib_1.__decorate([
        rest_1.del('/projects/{id}', {
            responses: {
                '204': {
                    description: 'Projects DELETE success',
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ProjectsController.prototype, "deleteById", null);
    ProjectsController = tslib_1.__decorate([
        tslib_1.__param(0, repository_1.repository(repositories_1.ProjectsRepository)),
        tslib_1.__metadata("design:paramtypes", [repositories_1.ProjectsRepository])
    ], ProjectsController);
    return ProjectsController;
})();
exports.ProjectsController = ProjectsController;
//# sourceMappingURL=projects.controller.js.map