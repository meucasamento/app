import pt from 'date-fns/locale/pt';
import { format, formatDistanceToNow } from 'date-fns'
import { WeddingState } from './../types/wedding.types'

export function weddingReducer(): WeddingState {
    const date = new Date(2020, 5, 6, 19, 0, 0)
    const formattedDate = format(date, "'Dia' dd 'de' MMMM',\n' iiii 'às 'HH:mm'h'", { locale: pt })
    const formattedDaysLeft = formatDistanceToNow(date, { locale: pt})

    return {
        wedding: {
            date,
            formattedDate,
            formattedDaysLeft
        }
    }
}