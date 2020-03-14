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
        const { token } = await this.session.getToken()

        const headers = {
            authorization: token
        }

        return await api.request<Report>("dashboard/report", "get", { headers })
    }

}

export default new ReportRepository