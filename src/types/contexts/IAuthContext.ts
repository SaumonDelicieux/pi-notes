import React from 'react'

import { IUser } from '../IUser'

export interface IAuthContext {
    user?: IUser
    setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>
}
