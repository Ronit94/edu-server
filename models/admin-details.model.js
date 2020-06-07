"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDetails = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let AdminDetails = /** @class */ (() => {
    let AdminDetails = class AdminDetails extends repository_1.Entity {
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
    ], AdminDetails.prototype, "AdminEmail", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], AdminDetails.prototype, "Address", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], AdminDetails.prototype, "Role", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], AdminDetails.prototype, "Designation", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'number',
            required: true,
        }),
        tslib_1.__metadata("design:type", Number)
    ], AdminDetails.prototype, "experience", void 0);
    AdminDetails = tslib_1.__decorate([
        repository_1.model(),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], AdminDetails);
    return AdminDetails;
})();
exports.AdminDetails = AdminDetails;
//# sourceMappingURL=admin-details.model.js.map