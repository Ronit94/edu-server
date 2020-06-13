"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ProjectsRepository = /** @class */ (() => {
    let ProjectsRepository = class ProjectsRepository extends repository_1.DefaultCrudRepository {
        constructor(dataSource, adminsRepositoryGetter) {
            super(models_1.Projects, dataSource);
            this.adminsRepositoryGetter = adminsRepositoryGetter;
            //this.AuthorEmail = this.createHasManyRepositoryFactoryFor('AuthorEmail', adminsRepositoryGetter);
            //this.registerInclusionResolver('AuthorEmail', this.AuthorEmail.inclusionResolver);
        }
    };
    ProjectsRepository = tslib_1.__decorate([
        tslib_1.__param(0, core_1.inject('datasources.educare')),
        tslib_1.__param(1, repository_1.repository.getter('AdminsRepository')),
        tslib_1.__metadata("design:paramtypes", [datasources_1.EducareDataSource, Function])
    ], ProjectsRepository);
    return ProjectsRepository;
})();
exports.ProjectsRepository = ProjectsRepository;
//# sourceMappingURL=projects.repository.js.map