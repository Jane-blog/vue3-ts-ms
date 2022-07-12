import { UserState } from './user/types'
export interface IRootState {
  name: string
}

export interface IRootAndUser {
  user: UserState
  app: any
  tags: any
}

export type IStore = IRootState & IRootAndUser
