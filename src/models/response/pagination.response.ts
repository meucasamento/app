export interface Pagination {
    limit: number,
    page: number,
    pages: number,
    total: number
}

export interface PaginationResult<T> {
    items: T[],
    pagination: Pagination
}