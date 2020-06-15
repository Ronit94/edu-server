"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDetailsController = void 0;
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
let AdminDetailsController = /** @class */ (() => {
    let AdminDetailsController = class AdminDetailsController {
        constructor(adminDetailsRepository, jwtService, request) {
            this.adminDetailsRepository = adminDetailsRepository;
            this.jwtService = jwtService;
            this.request = request;
        }
        async create(adminDetails) {
            return this.adminDetailsRepository.create(adminDetails);
        }
        async findById(filter) {
            const token = this.jwtService.extractCredentials(this.request);
            const userProfile = await this.jwtService.verifyToken(token);
            return this.adminDetailsRepository.findById(userProfile[security_1.securityId], filter);
        }
        async updateById(adminDetails) {
            const token = this.jwtService.extractCredentials(this.request);
            const userProfile = await this.jwtService.verifyToken(token);
            await this.adminDetailsRepository.updateById(userProfile[security_1.securityId], adminDetails);
        }
        async replaceById(adminDetails) {
            const token = this.jwtService.extractCredentials(this.request);
            const userProfile = await this.jwtService.verifyToken(token);
            await this.adminDetailsRepository.replaceById(userProfile[security_1.securityId], adminDetails);
        }
        async deleteById() {
            const token = this.jwtService.extractCredentials(this.request);
            const userProfile = await this.jwtService.verifyToken(token);
            await this.adminDetailsRepository.deleteById(userProfile[security_1.securityId]);
        }
    };
    tslib_1.__decorate([
        rest_1.post('/admin-details', {
            responses: {
                '200': {
                    description: 'AdminDetails model instance',
                    content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.AdminDetails) } },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.AdminDetails, {
                        title: 'NewAdminDetails',
                    }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [models_1.AdminDetails]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminDetailsController.prototype, "create", null);
    tslib_1.__decorate([
        rest_1.get('/admin-details', {
            responses: {
                '200': {
                    description: 'AdminDetails model instance',
                    content: {
                        'application/json': {
                            schema: rest_1.getModelSchemaRef(models_1.AdminDetails, { includeRelations: true }),
                        },
                    },
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.filter(models_1.AdminDetails, { exclude: 'where' })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminDetailsController.prototype, "findById", null);
    tslib_1.__decorate([
        rest_1.patch('/admin-details', {
            responses: {
                '204': {
                    description: 'AdminDetails PATCH success',
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.AdminDetails, { partial: true }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [models_1.AdminDetails]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminDetailsController.prototype, "updateById", null);
    tslib_1.__decorate([
        rest_1.put('/admin-details', {
            responses: {
                '204': {
                    description: 'AdminDetails PUT success',
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.requestBody()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [models_1.AdminDetails]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminDetailsController.prototype, "replaceById", null);
    tslib_1.__decorate([
        rest_1.del('/admin-details', {
            responses: {
                '204': {
                    description: 'AdminDetails DELETE success',
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminDetailsController.prototype, "deleteById", null);
    AdminDetailsController = tslib_1.__decorate([
        tslib_1.__param(0, repository_1.repository(repositories_1.AdminDetailsRepository)),
        tslib_1.__param(1, core_1.inject(key_1.TokenServiceBindings.TOKEN_SERVICE)),
        tslib_1.__param(2, core_1.inject(rest_1.RestBindings.Http.REQUEST)),
        tslib_1.__metadata("design:paramtypes", [repositories_1.AdminDetailsRepository,
            services_1.JWTService, Object])
    ], AdminDetailsController);
    return AdminDetailsController;
})();
exports.AdminDetailsController = AdminDetailsController;
//# sourceMappingURL=admin-details.controller.js.map