import pt from 'date-fns/locale/pt';
import { format } from 'date-fns'
import { WeddingState } from './../types/wedding.types'

export function weddingReducer(): WeddingState {
    const now = new Date()
    const date = new Date(2020, 5, 6, 19, 0, 0)
    const diffTime = Math.abs(date.getTime() - now.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const formattedDate = format(date, "'Dia' dd 'de' MMMM',' iiii 'às 'HH:mm'h'", { locale: pt })

    return {
        wedding: {
            date,
            formattedDate,
            daysLeft: diffDays,
            formattedDaysLeft: diffDays + " dias"
        }
    }
}