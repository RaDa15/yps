import PycdStats from "../../components/pycd/PycdStats";
import YouthAnalytics from "../../components/pycd/YouthAnalytics";
import CentreMonitoring from "../../components/pycd/ProgrammeAnalytics";
import ProgrammeMonitoring from "../../components/pycd/YouthCentrePerformance";
import VolunteerAnalytics from "../../components/pycd/VolunteerAnalytics";
import ApprovalQueue from "../../components/pycd/ApprovalMonitoring";
import PycdReports from "../../components/pycd/ReportsExport";
import QuickActions from "../../components/pycd/QuickActions";


const PycdAdminDashboard =()=>{

return(

<div className="space-y-6">

<h1 className="text-2xl font-bold">
PYCD Focal Dashboard
</h1>


<PycdStats />

<YouthAnalytics />

<CentreMonitoring />

<ProgrammeMonitoring />

<VolunteerAnalytics />

<ApprovalQueue />

<PycdReports />

<QuickActions />


</div>

)

}

export default PycdAdminDashboard;