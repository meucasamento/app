import Report from "../../../models/report.model";
import { FetchActionTypes, FETCH, FETCH_SUCCESS, FETCH_FAILURE } from "./report.types";

export const fetch = (): FetchActionTypes => ({
    type: FETCH
})

export const fetchSuccess = (report: Report): FetchActionTypes => ({
    type: FETCH_SUCCESS,
    payload: report
})

export const fetchFailure = (error: Error): FetchActionTypes => ({
    type: FETCH_FAILURE,
    payload: error
})