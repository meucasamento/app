export default interface Guest {
    _id: string
    name: string
    invitationDelivered?: boolean
    isGodfather?: boolean
    godfatherOf?: string,
    includeFamily?: boolean
    peopleCount?: number
    peopleCountTotal?: number
    hasCompanion?: boolean
    companion?: string
    guestOf?: string
}