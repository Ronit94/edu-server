/// <reference types="express" />
import { AuthenticationStrategy, TokenService } from '@loopback/authentication';
import { OASEnhancer, OpenApiSpec } from '@loopback/openapi-v3';
import { Request } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
export declare class JWTAuthenticationStrategy implements AuthenticationStrategy, OASEnhancer {
    tokenService: TokenService;
    name: string;
    constructor(tokenService: TokenService);
    authenticate(request: Request): Promise<UserProfile | undefined>;
    extractCredentials(request: Request): string;
    modifySpec(spec: OpenApiSpec): OpenApiSpec;
}
