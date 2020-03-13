export default interface Report {
    guests: {
        engaged: number,
        fiancee: number,
        total: number
    },
    godfathers: {
        engaged: number,
        fiancee: number,
        total: number
    },
    invitations: {
        delivered: number,
        undelivered: number,
        total: number
    }
}