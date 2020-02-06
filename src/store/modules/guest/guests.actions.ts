import { 
    SEARCH_GUESTS,
    STORE_GUEST,
    REMOVE_GUEST,
    UPDATE_GUEST,
    GuestActionsTypes,
    Guest
} from './guests.types'

export function search(query?: string): GuestActionsTypes {
    return {
        type: SEARCH_GUESTS,
        payload: {
            query,
            guests: []
        }
    }
}

export function store(guest: Guest): GuestActionsTypes {
    return {
        type: STORE_GUEST,
        payload: guest
    }
}

export function update(guest: Guest, status: boolean): GuestActionsTypes {
    guest.isConfirmed = status

    return {
        type: UPDATE_GUEST,
        payload: guest
    }
}

export function remove(guest: Guest): GuestActionsTypes {
    return {
        type: REMOVE_GUEST,
        payload: guest
    }
}