"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let AdminsRepository = /** @class */ (() => {
    let AdminsRepository = class AdminsRepository extends repository_1.DefaultCrudRepository {
        constructor(dataSource, adminDetailsRepositoryGetter, projectsRepositoryGetter, studentsRepositoryGetter, followersRepositoryGetter) {
            super(models_1.Admins, dataSource);
            this.adminDetailsRepositoryGetter = adminDetailsRepositoryGetter;
            this.projectsRepositoryGetter = projectsRepositoryGetter;
            this.studentsRepositoryGetter = studentsRepositoryGetter;
            this.followersRepositoryGetter = followersRepositoryGetter;
            this.followers = this.createHasManyRepositoryFactoryFor('followers', followersRepositoryGetter);
            this.registerInclusionResolver('followers', this.followers.inclusionResolver);
            this.students = this.createHasManyRepositoryFactoryFor('students', studentsRepositoryGetter);
            this.registerInclusionResolver('students', this.students.inclusionResolver);
            this.projects = this.createHasManyRepositoryFactoryFor('projects', projectsRepositoryGetter);
            this.registerInclusionResolver('projects', this.projects.inclusionResolver);
            this.AdminRelation = this.createBelongsToAccessorFor('AdminRelation', adminDetailsRepositoryGetter);
            this.registerInclusionResolver('AdminRelation', this.AdminRelation.inclusionResolver);
        }
    };
    AdminsRepository = tslib_1.__decorate([
        tslib_1.__param(0, core_1.inject('datasources.educare')),
        tslib_1.__param(1, repository_1.repository.getter('AdminDetailsRepository')),
        tslib_1.__param(2, repository_1.repository.getter('ProjectsRepository')),
        tslib_1.__param(3, repository_1.repository.getter('StudentsRepository')), tslib_1.__param(4, repository_1.repository.getter('FollowersRepository')),
        tslib_1.__metadata("design:paramtypes", [datasources_1.EducareDataSource, Function, Function, Function, Function])
    ], AdminsRepository);
    return AdminsRepository;
})();
exports.AdminsRepository = AdminsRepository;
//# sourceMappingURL=admins.repository.js.map