export interface Wedding {
    date: Date,
    formattedDate: string,
    daysLeft: number,
    formattedDaysLeft: string
}

export interface WeddingState {
    wedding: Wedding
}