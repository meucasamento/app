import { 
    SEARCH,
    STORE,
    REMOVE,
    UPDATE,
    GuestActionsTypes,
    Guest
} from './guest.types'

export function search(query?: string): GuestActionsTypes {
    return {
        type: SEARCH,
        payload: {
            guests: []
        }
    }
}

export function store(guest: Guest): GuestActionsTypes {
    return {
        type: STORE,
        payload: guest
    }
}

export function update(guest: Guest, status: boolean): GuestActionsTypes {
    guest.isConfirmed = status

    return {
        type: UPDATE,
        payload: guest
    }
}

export function remove(guest: Guest): GuestActionsTypes {
    return {
        type: REMOVE,
        payload: guest
    }
}