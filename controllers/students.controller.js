"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsController = void 0;
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
let StudentsController = /** @class */ (() => {
    let StudentsController = class StudentsController {
        constructor(studentsRepository, jwtService, passwordHasher, request) {
            this.studentsRepository = studentsRepository;
            this.jwtService = jwtService;
            this.passwordHasher = passwordHasher;
            this.request = request;
        }
        async create(students) {
            return this.studentsRepository.create(students);
        }
        async count(where) {
            const token = this.jwtService.extractCredentials(this.request);
            const userProfile = await this.jwtService.verifyToken(token);
            where = { adminsId: userProfile[security_1.securityId] };
            return this.studentsRepository.count(where);
        }
        async find(filter) {
            return this.studentsRepository.find(filter);
        }
        async updateAll(students, where) {
            return this.studentsRepository.updateAll(students, where);
        }
        async findById(id, filter) {
            return this.studentsRepository.findById(id, filter);
        }
        async updateById(id, students) {
            await this.studentsRepository.updateById(id, students);
        }
        async replaceById(id, students) {
            await this.studentsRepository.replaceById(id, students);
        }
        async deleteById(id) {
            await this.studentsRepository.deleteById(id);
        }
    };
    tslib_1.__decorate([
        rest_1.post('/students', {
            responses: {
                '200': {
                    description: 'Students model instance',
                    content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Students) } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Students, {
                        title: 'NewStudents',
                    }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [models_1.Students]),
        tslib_1.__metadata("design:returntype", Promise)
    ], StudentsController.prototype, "create", null);
    tslib_1.__decorate([
        rest_1.get('/students/count', {
            responses: {
                '200': {
                    description: 'Students model count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.where(models_1.Students)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], StudentsController.prototype, "count", null);
    tslib_1.__decorate([
        rest_1.get('/students', {
            responses: {
                '200': {
                    description: 'Array of Students model instances',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: rest_1.getModelSchemaRef(models_1.Students, { includeRelations: true }),
                            },
                        },
                    },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.filter(models_1.Students)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], StudentsController.prototype, "find", null);
    tslib_1.__decorate([
        rest_1.patch('/students', {
            responses: {
                '200': {
                    description: 'Students PATCH success count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Students, { partial: true }),
                },
            },
        })),
        tslib_1.__param(1, rest_1.param.where(models_1.Students)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [models_1.Students, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], StudentsController.prototype, "updateAll", null);
    tslib_1.__decorate([
        rest_1.get('/students/{id}', {
            responses: {
                '200': {
                    description: 'Students model instance',
                    content: {
                        'application/json': {
                            schema: rest_1.getModelSchemaRef(models_1.Students, { includeRelations: true }),
                        },
                    },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.param.filter(models_1.Students, { exclude: 'where' })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], StudentsController.prototype, "findById", null);
    tslib_1.__decorate([
        rest_1.patch('/students/{id}', {
            responses: {
                '204': {
                    description: 'Students PATCH success',
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Students, { partial: true }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, models_1.Students]),
        tslib_1.__metadata("design:returntype", Promise)
    ], StudentsController.prototype, "updateById", null);
    tslib_1.__decorate([
        rest_1.put('/students/{id}', {
            responses: {
                '204': {
                    description: 'Students PUT success',
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.requestBody()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, models_1.Students]),
        tslib_1.__metadata("design:returntype", Promise)
    ], StudentsController.prototype, "replaceById", null);
    tslib_1.__decorate([
        rest_1.del('/students/{id}', {
            responses: {
                '204': {
                    description: 'Students DELETE success',
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], StudentsController.prototype, "deleteById", null);
    StudentsController = tslib_1.__decorate([
        tslib_1.__param(0, repository_1.repository(repositories_1.StudentsRepository)),
        tslib_1.__param(1, core_1.inject(key_1.TokenServiceBindings.TOKEN_SERVICE)),
        tslib_1.__param(2, core_1.inject(key_1.PasswordHasherBindings.PASSWORD_HASHER)),
        tslib_1.__param(3, core_1.inject(rest_1.RestBindings.Http.REQUEST)),
        tslib_1.__metadata("design:paramtypes", [repositories_1.StudentsRepository,
            services_1.JWTService, Object, Object])
    ], StudentsController);
    return StudentsController;
})();
exports.StudentsController = StudentsController;
//# sourceMappingURL=students.controller.js.map