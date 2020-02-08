import { 
    SEARCH_SUCCESS,
    GuestActionsTypes
} from './../../modules/guest/guest.types'

const loggerMiddleware = (store: any) => (next: (arg: any) => void) => (action: GuestActionsTypes) => {
    next(action)
}

export default loggerMiddleware