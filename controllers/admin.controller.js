"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const security_1 = require("@loopback/security");
const _ = tslib_1.__importStar(require("lodash"));
const key_1 = require("../key");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const jwt_service_1 = require("../services/jwt-service");
let AdminController = /** @class */ (() => {
    let AdminController = class AdminController {
        constructor(adminsRepository, passwordHasher, jwtService, request) {
            this.adminsRepository = adminsRepository;
            this.passwordHasher = passwordHasher;
            this.jwtService = jwtService;
            this.request = request;
        }
        async create(admins) {
            admins.adminPassword = await this.passwordHasher.hashPassword(admins.adminPassword);
            admins.College_ID = await this.passwordHasher.createCollegeID(admins.College_Name, admins.College_state);
            let adminResponse = await this.adminsRepository.create(admins);
            delete (await adminResponse).adminPassword;
            return adminResponse;
        }
        async count(where) {
            return this.adminsRepository.count(where);
        }
        async find(filter) {
            return this.adminsRepository.find(filter);
        }
        async updateAll(admins, where) {
            return this.adminsRepository.updateAll(admins, where);
        }
        async login(admins, filter) {
            let adminResponse = await this.adminsRepository.findById(admins.AdminEmail, filter);
            if (!_.isEmpty(adminResponse)) {
                if (await this.passwordHasher.comparePassword(admins.adminPassword, adminResponse.adminPassword) === true) {
                    let token = await this.jwtService.generateToken(adminResponse);
                    let user = { 'AdminEmail': adminResponse.AdminEmail, 'AdminName': adminResponse.AdminName, 'authToken': token };
                    return user;
                }
                else {
                    throw new rest_1.HttpErrors.Unauthorized(`Password missmatch`);
                }
            }
            else {
                throw new rest_1.HttpErrors.NotFound(`User is not exists in Application`);
            }
        }
        async updateById(id, admins) {
            admins.adminPassword = await this.passwordHasher.hashPassword(admins.adminPassword);
            await this.adminsRepository.updateById(id, admins);
        }
        async replaceById(id, admins) {
            admins.createdAt = new Date().toLocaleString();
            admins.updatedAt = new Date().toLocaleString();
            await this.adminsRepository.replaceById(id, admins);
        }
        async deleteById(id) {
            await this.adminsRepository.deleteById(id);
        }
        async getProfile(filter) {
            const token = this.jwtService.extractCredentials(this.request);
            const userProfile = await this.jwtService.verifyToken(token);
            let adminResponse = await this.adminsRepository.findById(userProfile[security_1.securityId], { include: [{ relation: 'AdminRelation' }] });
            delete (await adminResponse).College_ID;
            delete (await adminResponse).adminPassword;
            delete (await adminResponse).adminDetailsId;
            return adminResponse;
        }
    };
    tslib_1.__decorate([
        rest_1.post('/admins', {
            responses: {
                '200': {
                    description: 'Admins model instance',
                    content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Admins) } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Admins, {
                        title: 'NewAdmins',
                        exclude: ['College_ID', 'createdAt', 'updatedAt'],
                    }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [models_1.Admins]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminController.prototype, "create", null);
    tslib_1.__decorate([
        rest_1.get('/admins/count', {
            responses: {
                '200': {
                    description: 'Admins model count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.where(models_1.Admins)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminController.prototype, "count", null);
    tslib_1.__decorate([
        rest_1.get('/admins', {
            responses: {
                '200': {
                    description: 'Array of Admins model instances',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: rest_1.getModelSchemaRef(models_1.Admins, { includeRelations: true }),
                            },
                        },
                    },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.filter(models_1.Admins)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminController.prototype, "find", null);
    tslib_1.__decorate([
        rest_1.patch('/admins', {
            responses: {
                '200': {
                    description: 'Admins PATCH success count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Admins, { partial: true }),
                },
            },
        })),
        tslib_1.__param(1, rest_1.param.where(models_1.Admins)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [models_1.Admins, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminController.prototype, "updateAll", null);
    tslib_1.__decorate([
        rest_1.post('/admins/login', {
            responses: {
                '200': {
                    description: 'Admins model instance',
                },
            },
        }),
        tslib_1.__param(0, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Admins, { partial: true }),
                },
            },
        })),
        tslib_1.__param(1, rest_1.param.filter(models_1.Admins, { exclude: 'where' })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [models_1.Admins, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminController.prototype, "login", null);
    tslib_1.__decorate([
        rest_1.patch('/admins/{id}', {
            responses: {
                '204': {
                    description: 'Admins PATCH success',
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Admins, { partial: true }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, models_1.Admins]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminController.prototype, "updateById", null);
    tslib_1.__decorate([
        rest_1.put('/admins/{id}', {
            responses: {
                '204': {
                    description: 'Admins PUT success',
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Admins, {
                        title: 'NewAdmins',
                        exclude: ['College_ID', 'createdAt', 'updatedAt', 'adminPassword'],
                    }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, models_1.Admins]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminController.prototype, "replaceById", null);
    tslib_1.__decorate([
        rest_1.del('/admins/{id}', {
            responses: {
                '204': {
                    description: 'Admins DELETE success',
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminController.prototype, "deleteById", null);
    tslib_1.__decorate([
        rest_1.get('/admins/profile', {
            responses: {
                '204': {
                    description: 'Admins profile success',
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.filter(models_1.Admins)),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminController.prototype, "getProfile", null);
    AdminController = tslib_1.__decorate([
        tslib_1.__param(0, repository_1.repository(repositories_1.AdminsRepository)),
        tslib_1.__param(1, core_1.inject(key_1.PasswordHasherBindings.PASSWORD_HASHER)),
        tslib_1.__param(2, core_1.inject(key_1.TokenServiceBindings.TOKEN_SERVICE)),
        tslib_1.__param(3, core_1.inject(rest_1.RestBindings.Http.REQUEST)),
        tslib_1.__metadata("design:paramtypes", [repositories_1.AdminsRepository, Object, jwt_service_1.JWTService, Object])
    ], AdminController);
    return AdminController;
})();
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map