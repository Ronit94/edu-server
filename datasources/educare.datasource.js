"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducareDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'educare',
    connector: 'mysql',
    url: '',
    host: 'rkghosal.co.in',
    port: 3306,
    user: 'ronnie_butter',
    password: 'Bo_f43y1',
    database: 'a1869d62c_ronnie'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let EducareDataSource = /** @class */ (() => {
    let EducareDataSource = class EducareDataSource extends repository_1.juggler.DataSource {
        constructor(dsConfig = config) {
            super(dsConfig);
        }
    };
    EducareDataSource.dataSourceName = 'educare';
    EducareDataSource.defaultConfig = config;
    EducareDataSource = tslib_1.__decorate([
        core_1.lifeCycleObserver('datasource'),
        tslib_1.__param(0, core_1.inject('datasources.config.educare', { optional: true })),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], EducareDataSource);
    return EducareDataSource;
})();
exports.EducareDataSource = EducareDataSource;
//# sourceMappingURL=educare.datasource.js.map