import Report from "../../../models/report.model"

export const FETCH = '@report/FETCH'
export const FETCH_SUCCESS = '@report/FETCH_SUCCESS'
export const FETCH_FAILURE = '@report/FETCH_FAILURE'

export interface ReportState {
    report: Report,
    isLoading: boolean,
    error?: Error
}

// Fetch Types

export interface Fetch {
    type: typeof FETCH
}

interface FetchSuccess {
    type: typeof FETCH_SUCCESS
    payload: Report
}

interface FetchFailure {
    type: typeof FETCH_FAILURE
    payload: Error
}

export type FetchActionTypes = Fetch | FetchSuccess | FetchFailure

export type ReportActionTypes = FetchActionTypes