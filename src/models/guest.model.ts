export default interface Guest {
    _id: string
    name: string
    invitationDelivered?: boolean
    isGodfather?: boolean
    isFamily?: boolean
    peopleCount?: number
}