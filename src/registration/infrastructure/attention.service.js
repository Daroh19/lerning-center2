import http from './registration-api.js'
import { AttentionAssembler } from './attention.assembler.js'

/**
 * Attention Service
 * @summary Handles HTTP communication for attentions endpoint
 * @author Tu Nombre Apellido
 */
export class AttentionService {
    getAll() {
        return http.get('/attentions')
            .then(r => AttentionAssembler.toEntities(r.data))
    }
    updateRegisterIn(id, registerInAt) {
        return http.patch(`/attentions/${id}`, { registerInAt })
    }
}