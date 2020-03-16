import api from '../../services/api'
import Report from "../../models/report.model";

export interface ReportRepositoryInterface {
    fetch(): Promise<Report>
}

class ReportRepository implements ReportRepositoryInterface {

    fetch = async (): Promise<Report> => {
        return await api.request<Report>("dashboard/report", "get")
    }

}

export default new ReportRepository