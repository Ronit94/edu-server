"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Students = /** @class */ (() => {
    let Students = class Students extends repository_1.Entity {
        constructor(data) {
            super(data);
        }
    };
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Students.prototype, "StudentsName", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            id: true,
            generated: false,
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Students.prototype, "StudentsEmail", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Students.prototype, "College_Name", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Students.prototype, "College_state", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Students.prototype, "StudentMobile", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Students.prototype, "Gender", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", Number)
    ], Students.prototype, "Semester", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", Number)
    ], Students.prototype, "Year", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
        }),
        tslib_1.__metadata("design:type", String)
    ], Students.prototype, "College_ID", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
        }),
        tslib_1.__metadata("design:type", String)
    ], Students.prototype, "adminsId", void 0);
    Students = tslib_1.__decorate([
        repository_1.model(),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], Students);
    return Students;
})();
exports.Students = Students;
//# sourceMappingURL=students.model.js.map