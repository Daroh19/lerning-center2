/**
 * Attention entity
 * @summary Represents a customer attention record
 * @author Tu Nombre Apellido
 */
export class Attention {
    constructor({ id, firstName, lastName, branchId, ticketIdentifier, registerInAt }) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.branchId = branchId
        this.ticketIdentifier = ticketIdentifier
        this.registerInAt = registerInAt
    }
}