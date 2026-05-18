import { Branch } from '../domain/branch.entity.js'

/**
 * Branch Assembler
 * @summary Transforms raw API response into Branch entity
 * @author Tu Nombre Apellido
 */
export class BranchAssembler {
    static toEntity(resource) {
        return new Branch(resource)
    }
    static toEntities(resources) {
        return resources.map(r => this.toEntity(r))
    }
}