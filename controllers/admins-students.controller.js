"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsStudentsController = void 0;
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
let AdminsStudentsController = /** @class */ (() => {
    let AdminsStudentsController = class AdminsStudentsController {
        constructor(adminsRepository, jwtService, passwordHasher, request) {
            this.adminsRepository = adminsRepository;
            this.jwtService = jwtService;
            this.passwordHasher = passwordHasher;
            this.request = request;
        }
        async find(
        //@param.query.object('filter') filter?: Filter<Students>,
        offset, limit, order, sortOrder, Gender) {
            let filter = {};
            const token = this.jwtService.extractCredentials(this.request);
            const userProfile = await this.jwtService.verifyToken(token);
            filter.limit = limit;
            filter.offset = offset;
            if (Gender) {
                filter.where = { 'Gender': Gender };
            }
            if (sortOrder != 'null' && order != 'null') {
                sortOrder = sortOrder === 'ascend' ? 'asc' : 'desc';
                filter.order = [
                    `${order} ${sortOrder}`
                ];
            }
            return this.adminsRepository.students(userProfile[security_1.securityId]).find(filter);
        }
        async create(students) {
            const token = this.jwtService.extractCredentials(this.request);
            const userProfile = await this.jwtService.verifyToken(token);
            students.College_ID = await this.passwordHasher.createCollegeID(students.College_Name, students.College_state);
            return this.adminsRepository.students(userProfile[security_1.securityId]).create(students);
        }
        async patch(students, where) {
            const token = this.jwtService.extractCredentials(this.request);
            const userProfile = await this.jwtService.verifyToken(token);
            return this.adminsRepository.students(userProfile[security_1.securityId]).patch(students, where);
        }
        async delete(where) {
            const token = this.jwtService.extractCredentials(this.request);
            const userProfile = await this.jwtService.verifyToken(token);
            return this.adminsRepository.students(userProfile[security_1.securityId]).delete(where);
        }
    };
    tslib_1.__decorate([
        rest_1.get('/admins/students', {
            responses: {
                '200': {
                    description: 'Array of Admins has many Students',
                    content: {
                        'application/json': {
                            schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Students) },
                        },
                    },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.query.integer('offset')),
        tslib_1.__param(1, rest_1.param.query.integer('limit')),
        tslib_1.__param(2, rest_1.param.query.string('order')),
        tslib_1.__param(3, rest_1.param.query.string('sortOrder')),
        tslib_1.__param(4, rest_1.param.query.string('Gender')),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, Number, String, String, String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminsStudentsController.prototype, "find", null);
    tslib_1.__decorate([
        rest_1.post('/admins/students', {
            responses: {
                '200': {
                    description: 'Admins model instance',
                    content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Students) } },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Students, { partial: true }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [models_1.Students]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminsStudentsController.prototype, "create", null);
    tslib_1.__decorate([
        rest_1.patch('/admins/students', {
            responses: {
                '200': {
                    description: 'Admins.Students PATCH success count',
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
        tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Students))),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminsStudentsController.prototype, "patch", null);
    tslib_1.__decorate([
        rest_1.del('/admins/students', {
            responses: {
                '200': {
                    description: 'Admins.Students DELETE success count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Students))),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminsStudentsController.prototype, "delete", null);
    AdminsStudentsController = tslib_1.__decorate([
        tslib_1.__param(0, repository_1.repository(repositories_1.AdminsRepository)),
        tslib_1.__param(1, core_1.inject(key_1.TokenServiceBindings.TOKEN_SERVICE)),
        tslib_1.__param(2, core_1.inject(key_1.PasswordHasherBindings.PASSWORD_HASHER)),
        tslib_1.__param(3, core_1.inject(rest_1.RestBindings.Http.REQUEST)),
        tslib_1.__metadata("design:paramtypes", [repositories_1.AdminsRepository,
            services_1.JWTService, Object, Object])
    ], AdminsStudentsController);
    return AdminsStudentsController;
})();
exports.AdminsStudentsController = AdminsStudentsController;
//# sourceMappingURL=admins-students.controller.js.map