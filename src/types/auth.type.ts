import { UserType } from './user.type'
import { SuccessResponse } from './utils.type'

export type AuthResponse = SuccessResponse<UserType & { token: string }>
