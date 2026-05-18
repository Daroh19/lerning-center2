import http from './registration-api.js'
import { BranchAssembler } from './branch.assembler.js'

/**
 * Branch Service
 * @summary Handles HTTP communication for branches endpoint
 * @author Tu Nombre Apellido
 */
export class BranchService {
    getAll() {
        return http.get('/branches')
            .then(r => BranchAssembler.toEntities(r.data))
    }
}