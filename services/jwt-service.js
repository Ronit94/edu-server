"use strict";
// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTService = void 0;
const tslib_1 = require("tslib");
const context_1 = require("@loopback/context");
const rest_1 = require("@loopback/rest");
const security_1 = require("@loopback/security");
const util_1 = require("util");
const key_1 = require("../key");
const jwt = require('jsonwebtoken');
const signAsync = util_1.promisify(jwt.sign);
const verifyAsync = util_1.promisify(jwt.verify);
let JWTService = /** @class */ (() => {
    let JWTService = class JWTService {
        constructor(jwtSecret, jwtExpiresIn) {
            this.jwtSecret = jwtSecret;
            this.jwtExpiresIn = jwtExpiresIn;
        }
        async verifyToken(token) {
            if (!token) {
                throw new rest_1.HttpErrors.Unauthorized(`Error verifying token : 'token' is null`);
            }
            let userProfile;
            try {
                // decode user profile from token
                const decodedToken = await verifyAsync(token, this.jwtSecret);
                // don't copy over  token field 'iat' and 'exp', nor 'email' to user profile
                userProfile = Object.assign({ [security_1.securityId]: '', name: '' }, {
                    [security_1.securityId]: decodedToken.id,
                    name: decodedToken.name,
                    id: decodedToken.id,
                    roles: decodedToken.roles,
                });
            }
            catch (error) {
                throw new rest_1.HttpErrors.Unauthorized(`Error verifying token : ${error.message}`);
            }
            return userProfile;
        }
        async generateToken(userProfile) {
            if (!userProfile) {
                throw new rest_1.HttpErrors.Unauthorized('Error generating token : userProfile is null');
            }
            const userInfoForToken = {
                id: userProfile.AdminEmail,
                name: userProfile.AdminName,
                roles: userProfile.AdminEmail,
            };
            // Generate a JSON Web Token
            let token;
            try {
                token = await signAsync(userInfoForToken, this.jwtSecret, {
                    expiresIn: Number(this.jwtExpiresIn),
                });
            }
            catch (error) {
                throw new rest_1.HttpErrors.Unauthorized(`Error encoding token : ${error}`);
            }
            return token;
        }
        extractCredentials(request) {
            if (!request.headers.authorization) {
                throw new rest_1.HttpErrors.Unauthorized(`Authorization header not found.`);
            }
            // for example : Bearer xxx.yyy.zzz
            const authHeaderValue = request.headers.authorization;
            if (!authHeaderValue.startsWith('Bearer')) {
                throw new rest_1.HttpErrors.Unauthorized(`Authorization header is not of type 'Bearer'.`);
            }
            //split the string into 2 parts : 'Bearer ' and the `xxx.yyy.zzz`
            const parts = authHeaderValue.split(' ');
            if (parts.length !== 2)
                throw new rest_1.HttpErrors.Unauthorized(`Authorization header value has too many parts. It must follow the pattern: 'Bearer xx.yy.zz' where xx.yy.zz is a valid JWT token.`);
            const token = parts[1];
            return token;
        }
    };
    JWTService = tslib_1.__decorate([
        tslib_1.__param(0, context_1.inject(key_1.TokenServiceBindings.TOKEN_SECRET)),
        tslib_1.__param(1, context_1.inject(key_1.TokenServiceBindings.TOKEN_EXPIRES_IN)),
        tslib_1.__metadata("design:paramtypes", [String, String])
    ], JWTService);
    return JWTService;
})();
exports.JWTService = JWTService;
//# sourceMappingURL=jwt-service.js.map