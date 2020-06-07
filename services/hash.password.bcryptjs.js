"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptHasher = exports.hashPassword = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const bcryptjs_1 = require("bcryptjs");
const key_1 = require("../key");
// bind function to `services.bcryptjs.HashPassword`
async function hashPassword(password, rounds) {
    const salt = await bcryptjs_1.genSalt(rounds);
    return bcryptjs_1.hash(password, salt);
}
exports.hashPassword = hashPassword;
let BcryptHasher = /** @class */ (() => {
    let BcryptHasher = class BcryptHasher {
        constructor(rounds) {
            this.rounds = rounds;
        }
        async hashPassword(password) {
            const salt = await bcryptjs_1.genSalt(this.rounds);
            return bcryptjs_1.hash(password, salt);
        }
        async createCollegeID(collegeName, collegeState) {
            let [college, response] = [collegeName.split(' '), ''];
            for (let name of college) {
                response += name.charAt(0).toUpperCase();
            }
            return `${response}_${collegeState.replace(/ /g, '')}`;
        }
        async comparePassword(providedPass, storedPass) {
            const passwordIsMatched = await bcryptjs_1.compare(providedPass, storedPass);
            return passwordIsMatched;
        }
    };
    BcryptHasher = tslib_1.__decorate([
        tslib_1.__param(0, core_1.inject(key_1.PasswordHasherBindings.ROUNDS)),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], BcryptHasher);
    return BcryptHasher;
})();
exports.BcryptHasher = BcryptHasher;
//# sourceMappingURL=hash.password.bcryptjs.js.map