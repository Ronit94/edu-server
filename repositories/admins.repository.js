"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let AdminsRepository = /** @class */ (() => {
    let AdminsRepository = class AdminsRepository extends repository_1.DefaultCrudRepository {
        constructor(dataSource, adminDetailsRepositoryGetter) {
            super(models_1.Admins, dataSource);
            this.adminDetailsRepositoryGetter = adminDetailsRepositoryGetter;
            this.AdminRelation = this.createBelongsToAccessorFor('AdminRelation', adminDetailsRepositoryGetter);
            this.registerInclusionResolver('AdminRelation', this.AdminRelation.inclusionResolver);
        }
    };
    AdminsRepository = tslib_1.__decorate([
        tslib_1.__param(0, core_1.inject('datasources.educare')), tslib_1.__param(1, repository_1.repository.getter('AdminDetailsRepository')),
        tslib_1.__metadata("design:paramtypes", [datasources_1.EducareDataSource, Function])
    ], AdminsRepository);
    return AdminsRepository;
})();
exports.AdminsRepository = AdminsRepository;
//# sourceMappingURL=admins.repository.js.map