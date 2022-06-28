import { UserState } from './user/types'
export interface IRootState {
  name: string
}

export interface IRootAndUser {
  user: UserState
}

export type IStore = IRootState & IRootAndUser
