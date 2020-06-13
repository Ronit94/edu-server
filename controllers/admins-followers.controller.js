"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsFollowersController = void 0;
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
let AdminsFollowersController = /** @class */ (() => {
    let AdminsFollowersController = class AdminsFollowersController {
        constructor(adminsRepository, jwtService, request) {
            this.adminsRepository = adminsRepository;
            this.jwtService = jwtService;
            this.request = request;
        }
        async find(filter) {
            const token = this.jwtService.extractCredentials(this.request);
            const userProfile = await this.jwtService.verifyToken(token);
            return this.adminsRepository.followers(userProfile[security_1.securityId]).find(filter);
        }
        async create(id, followers) {
            return this.adminsRepository.followers(id).create(followers);
        }
        async patch(id, followers, where) {
            return this.adminsRepository.followers(id).patch(followers, where);
        }
        async delete(id, where) {
            return this.adminsRepository.followers(id).delete(where);
        }
    };
    tslib_1.__decorate([
        rest_1.get('/admins/followers', {
            responses: {
                '200': {
                    description: 'Array of Admins has many Followers',
                    content: {
                        'application/json': {
                            schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Followers) },
                        },
                    },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.query.object('filter')),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminsFollowersController.prototype, "find", null);
    tslib_1.__decorate([
        rest_1.post('/admins/{id}/followers', {
            responses: {
                '200': {
                    description: 'Admins model instance',
                    content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Followers) } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Followers, {
                        title: 'NewFollowersInAdmins',
                        exclude: ['email'],
                        optional: ['adminsId']
                    }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminsFollowersController.prototype, "create", null);
    tslib_1.__decorate([
        rest_1.patch('/admins/{id}/followers', {
            responses: {
                '200': {
                    description: 'Admins.Followers PATCH success count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.Followers, { partial: true }),
                },
            },
        })),
        tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Followers))),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminsFollowersController.prototype, "patch", null);
    tslib_1.__decorate([
        rest_1.del('/admins/{id}/followers', {
            responses: {
                '200': {
                    description: 'Admins.Followers DELETE success count',
                    content: { 'application/json': { schema: repository_1.CountSchema } },
                },
            },
        }),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Followers))),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminsFollowersController.prototype, "delete", null);
    AdminsFollowersController = tslib_1.__decorate([
        tslib_1.__param(0, repository_1.repository(repositories_1.AdminsRepository)),
        tslib_1.__param(1, core_1.inject(key_1.TokenServiceBindings.TOKEN_SERVICE)),
        tslib_1.__param(2, core_1.inject(rest_1.RestBindings.Http.REQUEST)),
        tslib_1.__metadata("design:paramtypes", [repositories_1.AdminsRepository,
            services_1.JWTService, Object])
    ], AdminsFollowersController);
    return AdminsFollowersController;
})();
exports.AdminsFollowersController = AdminsFollowersController;
//# sourceMappingURL=admins-followers.controller.js.map