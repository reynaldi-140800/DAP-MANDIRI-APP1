// Request
export interface Login {
    email: string
    password: string
}


// Response
export interface LoginResponse {
    email: string
    accessToken: string
}