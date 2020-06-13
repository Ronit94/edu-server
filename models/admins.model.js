"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admins = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const admin_details_model_1 = require("./admin-details.model");
const projects_model_1 = require("./projects.model");
const students_model_1 = require("./students.model");
const followers_model_1 = require("./followers.model");
let Admins = /** @class */ (() => {
    let Admins = class Admins extends repository_1.Entity {
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
    ], Admins.prototype, "College_ID", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Admins.prototype, "College_Name", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            id: true,
            generated: false,
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Admins.prototype, "AdminEmail", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Admins.prototype, "College_state", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Admins.prototype, "AdminName", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Admins.prototype, "AdminMobNo", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Admins.prototype, "adminPassword", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            default: ''
        }),
        tslib_1.__metadata("design:type", String)
    ], Admins.prototype, "ProfilePicture", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'date',
            required: true,
            defaultFn: "now"
        }),
        tslib_1.__metadata("design:type", String)
    ], Admins.prototype, "createdAt", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'date',
            required: true,
            defaultFn: "now"
        }),
        tslib_1.__metadata("design:type", String)
    ], Admins.prototype, "updatedAt", void 0);
    tslib_1.__decorate([
        repository_1.belongsTo(() => admin_details_model_1.AdminDetails, { name: 'AdminRelation' }),
        tslib_1.__metadata("design:type", String)
    ], Admins.prototype, "adminDetailsId", void 0);
    tslib_1.__decorate([
        repository_1.hasMany(() => projects_model_1.Projects),
        tslib_1.__metadata("design:type", Array)
    ], Admins.prototype, "projects", void 0);
    tslib_1.__decorate([
        repository_1.hasMany(() => students_model_1.Students),
        tslib_1.__metadata("design:type", Array)
    ], Admins.prototype, "students", void 0);
    tslib_1.__decorate([
        repository_1.hasMany(() => followers_model_1.Followers),
        tslib_1.__metadata("design:type", Array)
    ], Admins.prototype, "followers", void 0);
    Admins = tslib_1.__decorate([
        repository_1.model({ settings: {} }),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], Admins);
    return Admins;
})();
exports.Admins = Admins;
//# sourceMappingURL=admins.model.js.map