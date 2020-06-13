"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsProjectsController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const security_1 = require("@loopback/security");
const key_1 = require("../key");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const services_1 = require("../services");
let AdminsProjectsController = /** @class */ (() => {
    let AdminsProjectsController = class AdminsProjectsController {
        constructor(adminsRepository, jwtService, request) {
            this.adminsRepository = adminsRepository;
            this.jwtService = jwtService;
            this.request = request;
        }
        async find(filter) {
            const token = this.jwtService.extractCredentials(this.request);
            const userProfile = await this.jwtService.verifyToken(token);
            return this.adminsRepository.projects(userProfile[security_1.securityId]).find(filter);
        }
        async create(id, projects) {
            const token = this.jwtService.extractCredentials(this.request);
            const userProfile = await this.jwtService.verifyToken(token);
            return this.adminsRepository.projects(userProfile[security_1.securityId]).create(projects);
        }
        async patch(id, projects, where) {
            const token = this.jwtService.extractCredentials(this.request);
            const userProfile = await this.jwtService.verifyToken(token);
            return this.adminsRepository.projects(userProfile[security_1.securityId]).patch(projects, where);
        }
        async delete(id, where) {
            const token = this.jwtService.extractCredentials(this.request);
            const userProfile = await this.jwtService.verifyToken(token);
            return this.adminsRepository.projects(id).delete(where);
        }
    };
    tslib_1.__decorate([
        rest_1.get('/admins/projects', {
            responses: {
                '204': {
                    description: 'Admins profile success',
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.query.object('filter')),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminsProjectsController.prototype, "find", null);
    tslib_1.__decorate([
        rest_1.post('/admins/projects', {
            responses: {
                '200': {
                    description: 'Admins model instance',
                    content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Projects) } },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Projects, {
                        title: 'NewProjectsInAdmins',
                        exclude: [],
                        optional: ['adminsId']
                    }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, models_1.Projects]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminsProjectsController.prototype, "create", null);
    tslib_1.__decorate([
        rest_1.patch('/admins/projects', {
            responses: {
                '200': {
                    description: 'Admins.Projects PATCH success count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
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
        tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Projects))),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminsProjectsController.prototype, "patch", null);
    tslib_1.__decorate([
        rest_1.del('/admins/{id}/projects', {
            responses: {
                '200': {
                    description: 'Admins.Projects DELETE success count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Projects))),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminsProjectsController.prototype, "delete", null);
    AdminsProjectsController = tslib_1.__decorate([
        tslib_1.__param(0, repository_1.repository(repositories_1.AdminsRepository)),
        tslib_1.__param(1, core_1.inject(key_1.TokenServiceBindings.TOKEN_SERVICE)),
        tslib_1.__param(2, core_1.inject(rest_1.RestBindings.Http.REQUEST)),
        tslib_1.__metadata("design:paramtypes", [repositories_1.AdminsRepository,
            services_1.JWTService, Object])
    ], AdminsProjectsController);
    return AdminsProjectsController;
})();
exports.AdminsProjectsController = AdminsProjectsController;
//# sourceMappingURL=admins-projects.controller.js.map