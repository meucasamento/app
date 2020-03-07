export default interface Guest {
    _id: string
    name: string
    invitationDelivered?: boolean
    isGodfather?: boolean
    includeFamily?: boolean
    peopleCount?: number
    hasCompanion?: boolean
    companion?: string
}