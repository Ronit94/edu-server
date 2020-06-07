"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const key_1 = require("../key");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CoreController = /** @class */ (() => {
    let CoreController = class CoreController {
        constructor(collegeRepository, passwordHasher) {
            this.collegeRepository = collegeRepository;
            this.passwordHasher = passwordHasher;
        }
        async create(college) {
            college.College_ID = await this.passwordHasher.createCollegeID(college.College_Name, college.College_state);
            return this.collegeRepository.create(college);
        }
        async count(where) {
            return this.collegeRepository.count(where);
        }
        async find(filter) {
            return this.collegeRepository.find(filter);
        }
        async updateAll(college, where) {
            return this.collegeRepository.updateAll(college, where);
        }
        async findById(id, filter) {
            return this.collegeRepository.findById(id, filter);
        }
        async updateById(id, college) {
            await this.collegeRepository.updateById(id, college);
        }
        async replaceById(id, college) {
            await this.collegeRepository.replaceById(id, college);
        }
        async deleteById(id) {
            await this.collegeRepository.deleteById(id);
        }
    };
    tslib_1.__decorate([
        rest_1.post('/colleges', {
            responses: {
                '200': {
                    description: 'College model instance',
                    content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.College) } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.College, {
                        title: 'NewCollege',
                        exclude: ['College_ID'],
                    }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [models_1.College]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CoreController.prototype, "create", null);
    tslib_1.__decorate([
        rest_1.get('/colleges/count', {
            responses: {
                '200': {
                    description: 'College model count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.where(models_1.College)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CoreController.prototype, "count", null);
    tslib_1.__decorate([
        rest_1.get('/colleges', {
            responses: {
                '200': {
                    description: 'Array of College model instances',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: rest_1.getModelSchemaRef(models_1.College, { includeRelations: true }),
                            },
                        },
                    },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.filter(models_1.College)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CoreController.prototype, "find", null);
    tslib_1.__decorate([
        rest_1.patch('/colleges', {
            responses: {
                '200': {
                    description: 'College PATCH success count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.College, { partial: true }),
                },
            },
        })),
        tslib_1.__param(1, rest_1.param.where(models_1.College)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [models_1.College, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CoreController.prototype, "updateAll", null);
    tslib_1.__decorate([
        rest_1.get('/colleges/{id}', {
            responses: {
                '200': {
                    description: 'College model instance',
                    content: {
                        'application/json': {
                            schema: rest_1.getModelSchemaRef(models_1.College, { includeRelations: true }),
                        },
                    },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.param.filter(models_1.College, { exclude: 'where' })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CoreController.prototype, "findById", null);
    tslib_1.__decorate([
        rest_1.patch('/colleges/{id}', {
            responses: {
                '204': {
                    description: 'College PATCH success',
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.College, { partial: true }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, models_1.College]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CoreController.prototype, "updateById", null);
    tslib_1.__decorate([
        rest_1.put('/colleges/{id}', {
            responses: {
                '204': {
                    description: 'College PUT success',
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.requestBody()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, models_1.College]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CoreController.prototype, "replaceById", null);
    tslib_1.__decorate([
        rest_1.del('/colleges/{id}', {
            responses: {
                '204': {
                    description: 'College DELETE success',
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CoreController.prototype, "deleteById", null);
    CoreController = tslib_1.__decorate([
        tslib_1.__param(0, repository_1.repository(repositories_1.CollegeRepository)),
        tslib_1.__param(1, core_1.inject(key_1.PasswordHasherBindings.PASSWORD_HASHER)),
        tslib_1.__metadata("design:paramtypes", [repositories_1.CollegeRepository, Object])
    ], CoreController);
    return CoreController;
})();
exports.CoreController = CoreController;
//# sourceMappingURL=core.controller.js.map