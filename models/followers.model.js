"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Followers = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Followers = /** @class */ (() => {
    let Followers = class Followers extends repository_1.Entity {
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
    ], Followers.prototype, "email", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Followers.prototype, "name", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
            default: '',
        }),
        tslib_1.__metadata("design:type", String)
    ], Followers.prototype, "ProfilePicture", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'date',
            required: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], Followers.prototype, "following_date", void 0);
    tslib_1.__decorate([
        repository_1.property({
            type: 'string',
        }),
        tslib_1.__metadata("design:type", String)
    ], Followers.prototype, "adminsId", void 0);
    Followers = tslib_1.__decorate([
        repository_1.model(),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], Followers);
    return Followers;
})();
exports.Followers = Followers;
//# sourceMappingURL=followers.model.js.map