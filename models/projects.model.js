"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Projects = /** @class */ (() => {
    let Projects = class Projects extends repository_1.Entity {
        constructor(data) {
            super(data);
        }
    };
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            id: true,
            generated: false,
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Projects.prototype, "name", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Projects.prototype, "url", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Projects.prototype, "author", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'array',
            itemType: 'string'
        }),
        tslib_1.__metadata("design:type", Array)
    ], Projects.prototype, "collaborations", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'number',
            required: true,
        }),
        tslib_1.__metadata("design:type", Number)
    ], Projects.prototype, "likes", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'number',
            required: true,
        }),
        tslib_1.__metadata("design:type", Number)
    ], Projects.prototype, "hooks", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
        }),
        tslib_1.__metadata("design:type", String)
    ], Projects.prototype, "adminsId", void 0);
    Projects = tslib_1.__decorate([
        repository_1.model(),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], Projects);
    return Projects;
})();
exports.Projects = Projects;
//# sourceMappingURL=projects.model.js.map