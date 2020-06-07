"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.College = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let College = /** @class */ (() => {
    let College = class College extends repository_1.Entity {
        constructor(data) {
            super(data);
        }
    };
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            id: true,
            generated: false
        }),
        tslib_1.__metadata("design:type", String)
    ], College.prototype, "College_ID", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], College.prototype, "College_Name", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], College.prototype, "address", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], College.prototype, "College_state", void 0);
    College = tslib_1.__decorate([
        repository_1.model(),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], College);
    return College;
})();
exports.College = College;
//# sourceMappingURL=college.model.js.map