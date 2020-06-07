import { FilterExcludingWhere } from '@loopback/repository';
import { AdminDetails } from '../models';
import { AdminDetailsRepository } from '../repositories';
export declare class AdminDetailsController {
    adminDetailsRepository: AdminDetailsRepository;
    constructor(adminDetailsRepository: AdminDetailsRepository);
    create(adminDetails: AdminDetails): Promise<AdminDetails>;
    findById(id: string, filter?: FilterExcludingWhere<AdminDetails>): Promise<AdminDetails>;
    updateById(id: string, adminDetails: AdminDetails): Promise<void>;
    replaceById(id: string, adminDetails: AdminDetails): Promise<void>;
    deleteById(id: string): Promise<void>;
}
