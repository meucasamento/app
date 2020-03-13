import api from '../../services/api'
import sessionMananger, { Session } from "../../utils/SessionMananger";
import Report from "../../models/report.model";

export interface ReportRepositoryInterface {
    fetch(): Promise<Report>
}

class ReportRepository implements ReportRepositoryInterface {
    
    private session: Session

    constructor(session: Session = sessionMananger) {
        this.session = session
    }

    fetch = async (): Promise<Report> => {
        const headers = {
            authorization: await this.session.getToken()
        }

        return await api.request<Report>("dashboard/report", "get", { headers })
    }

}

export default new ReportRepository