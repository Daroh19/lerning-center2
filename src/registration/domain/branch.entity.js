/**
 * Branch entity
 * @summary Represents a BBVA branch office
 * @author Tu Nombre Apellido
 */
export class Branch {
    constructor({ id, name, description, address, capacity, openedAt }) {
        this.id = id
        this.name = name
        this.description = description
        this.address = address
        this.capacity = capacity
        this.openedAt = openedAt
    }
}