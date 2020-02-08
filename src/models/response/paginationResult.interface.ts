type Pagination = {
    limit: number,
    page: number,
    pages: number,
    total: number
}

export default interface PaginationResult<T> {
    items: T[],
    pagination: Pagination
}