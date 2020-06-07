/// <reference types="express" />
import { TokenService } from '@loopback/authentication';
import { Request } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
export declare class JWTService implements TokenService {
    private jwtSecret;
    private jwtExpiresIn;
    constructor(jwtSecret: string, jwtExpiresIn: string);
    private userprofile;
    verifyToken(token: string): Promise<UserProfile>;
    generateToken(userProfile: any): Promise<string>;
    extractCredentials(request: Request): string;
}
