export interface SuccessResponse<Data> {
    message: string
    data: Data
    success: boolean
}
export interface ErrorResponse {
    message: string
    error: boolean
}
