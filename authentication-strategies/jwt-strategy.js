"use strict";
// Copyright IBM Corp. 2019,2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTAuthenticationStrategy = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const context_1 = require("@loopback/context");
const openapi_v3_1 = require("@loopback/openapi-v3");
const rest_1 = require("@loopback/rest");
const key_1 = require("../key");
let JWTAuthenticationStrategy = /** @class */ (() => {
    let JWTAuthenticationStrategy = class JWTAuthenticationStrategy {
        constructor(tokenService) {
            this.tokenService = tokenService;
            this.name = 'jwt';
        }
        async authenticate(request) {
            const token = this.extractCredentials(request);
            const userProfile = await this.tokenService.verifyToken(token);
            return userProfile;
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
        modifySpec(spec) {
            return openapi_v3_1.mergeSecuritySchemeToSpec(spec, this.name, {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            });
        }
    };
    JWTAuthenticationStrategy = tslib_1.__decorate([
        context_1.bind(authentication_1.asAuthStrategy, openapi_v3_1.asSpecEnhancer),
        tslib_1.__param(0, context_1.inject(key_1.TokenServiceBindings.TOKEN_SERVICE)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], JWTAuthenticationStrategy);
    return JWTAuthenticationStrategy;
})();
exports.JWTAuthenticationStrategy = JWTAuthenticationStrategy;
//# sourceMappingURL=jwt-strategy.js.map