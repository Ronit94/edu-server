"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let StudentsRepository = /** @class */ (() => {
    let StudentsRepository = class StudentsRepository extends repository_1.DefaultCrudRepository {
        constructor(dataSource) {
            super(models_1.Students, dataSource);
        }
    };
    StudentsRepository = tslib_1.__decorate([
        tslib_1.__param(0, core_1.inject('datasources.educare')),
        tslib_1.__metadata("design:paramtypes", [datasources_1.EducareDataSource])
    ], StudentsRepository);
    return StudentsRepository;
})();
exports.StudentsRepository = StudentsRepository;
//# sourceMappingURL=students.repository.js.map