"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
let AuthService = /** @class */ (() => {
    let AuthService = class AuthService {
        constructor( /* Add @inject to inject parameters */) { }
    };
    AuthService = tslib_1.__decorate([
        core_1.bind({ scope: core_1.BindingScope.TRANSIENT }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
})();
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map