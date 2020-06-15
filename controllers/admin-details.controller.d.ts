/// <reference types="express" />
import { FilterExcludingWhere } from '@loopback/repository';
import { Request } from '@loopback/rest';
import { AdminDetails } from '../models';
import { AdminDetailsRepository } from '../repositories';
import { JWTService } from '../services';
export declare class AdminDetailsController {
    adminDetailsRepository: AdminDetailsRepository;
    jwtService: JWTService;
    request: Request;
    constructor(adminDetailsRepository: AdminDetailsRepository, jwtService: JWTService, request: Request);
    create(adminDetails: AdminDetails): Promise<AdminDetails>;
    findById(filter?: FilterExcludingWhere<AdminDetails>): Promise<AdminDetails>;
    updateById(adminDetails: AdminDetails): Promise<void>;
    replaceById(adminDetails: AdminDetails): Promise<void>;
    deleteById(): Promise<void>;
}
