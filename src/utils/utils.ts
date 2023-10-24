import axios, { AxiosError } from 'axios'
import { HttpStatusCode } from 'src/constants/httpStatusCode'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
    // eslint-disable-next-line import/no-named-as-default-member
    return axios.isAxiosError(error)
}

// Lỗi 404
export function isNotFoundError<NotFoundType>(error: unknown): error is AxiosError<NotFoundType> {
    return isAxiosError(error) && error.response?.status === HttpStatusCode.NotFound
}
