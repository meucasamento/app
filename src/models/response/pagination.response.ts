export default interface Pagination<T> {
    items: T[],
    pagination: {
        limit: number,
        page: number,
        pages: number,
        total: number
    }
}