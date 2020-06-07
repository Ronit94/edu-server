"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDetailsController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AdminDetailsController = /** @class */ (() => {
    let AdminDetailsController = class AdminDetailsController {
        constructor(adminDetailsRepository) {
            this.adminDetailsRepository = adminDetailsRepository;
        }
        async create(adminDetails) {
            return this.adminDetailsRepository.create(adminDetails);
        }
        async findById(id, filter) {
            return this.adminDetailsRepository.findById(id, filter);
        }
        async updateById(id, adminDetails) {
            await this.adminDetailsRepository.updateById(id, adminDetails);
        }
        async replaceById(id, adminDetails) {
            await this.adminDetailsRepository.replaceById(id, adminDetails);
        }
        async deleteById(id) {
            await this.adminDetailsRepository.deleteById(id);
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
        rest_1.get('/admin-details/{id}', {
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
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.param.filter(models_1.AdminDetails, { exclude: 'where' })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, Object]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminDetailsController.prototype, "findById", null);
    tslib_1.__decorate([
        rest_1.patch('/admin-details/{id}', {
            responses: {
                '204': {
                    description: 'AdminDetails PATCH success',
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.requestBody({
            content: {
                'application/json': {
                    schema: rest_1.getModelSchemaRef(models_1.AdminDetails, { partial: true }),
                },
            },
        })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, models_1.AdminDetails]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminDetailsController.prototype, "updateById", null);
    tslib_1.__decorate([
        rest_1.put('/admin-details/{id}', {
            responses: {
                '204': {
                    description: 'AdminDetails PUT success',
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__param(1, rest_1.requestBody()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, models_1.AdminDetails]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminDetailsController.prototype, "replaceById", null);
    tslib_1.__decorate([
        rest_1.del('/admin-details/{id}', {
            responses: {
                '204': {
                    description: 'AdminDetails DELETE success',
                },
            },
        }),
        authentication_1.authenticate('jwt'),
        tslib_1.__param(0, rest_1.param.path.string('id')),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AdminDetailsController.prototype, "deleteById", null);
    AdminDetailsController = tslib_1.__decorate([
        tslib_1.__param(0, repository_1.repository(repositories_1.AdminDetailsRepository)),
        tslib_1.__metadata("design:paramtypes", [repositories_1.AdminDetailsRepository])
    ], AdminDetailsController);
    return AdminDetailsController;
})();
exports.AdminDetailsController = AdminDetailsController;
//# sourceMappingURL=admin-details.controller.js.map