import { Attention } from '../domain/attention.entity.js'

/**
 * Attention Assembler
 * @summary Transforms raw API response into Attention entity
 * @author Tu Nombre Apellido
 */
export class AttentionAssembler {
    static toEntity(resource) {
        return new Attention(resource)
    }
    static toEntities(resources) {
        return resources.map(r => this.toEntity(r))
    }
}