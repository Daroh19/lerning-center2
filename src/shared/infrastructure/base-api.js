import axios from 'axios'

/**
 * Base API
 * @summary Creates base axios instance using environment variable
 * @author
 */
const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

export default http