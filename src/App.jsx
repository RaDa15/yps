import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";


import Home from "./pages/Home";
import Login from "./pages/Login";

import UserDashboard from "./pages/UserDashboard";
import Profile from "./pages/Profile";
import Applications from "./pages/Applications";

import Scholarships from "./pages/Scholarships";
import YouthQuest from "./pages/YouthQuest";
import Settings from "./pages/Settings";


import DashboardLayout from "./components/dashboard/DashboardLayout";


import YCManagerDashboard from "./pages/YCManagerDashboard";
import YCManagerLayout from "./components/dashboard/YCManagerLayout";
import YouthRegistration from "./pages/YouthRegistration";
import MemberTransfer from "./pages/MemberTransfer";
import VolunteerRegistration from "./pages/VolunteerRegistration";
import VolunteerActivityManagement from "./pages/VolunteerActivityManagement";
import ECertificateGeneration from "./pages/ECertificateGeneration";
import ProgrammeManagement from "./pages/ProgrammeManagement";
import ProgrammeReporting from "./pages/ProgrammeReporting";
import AchievementTracking from "./pages/AchievementTracking";
import AdditionalInitiatives from "./pages/AdditionalInitiatives";
import FeedbackManagement from "./pages/FeedbackManagement";
import CounsellingBooking from "./pages/CounsellingBooking";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLayout from "./components/admin/AdminLayout";
import RoleManagement from "./pages/RoleManagement";
import UserManagement from "./pages/UserManagement";
import YouthCentreManagement from "./pages/YouthCentreManagement";
import ProgrammeReview from "./pages/ProgrammeReview";
import AdminReports from "./pages/AdminReports";
import AuditLogs from "./pages/AuditLogs";

function App(){


return(


<BrowserRouter>


<Routes>





{/* Home Page */}

<Route

path="/"

element={<Home/>}

/>






{/* Login Page */}

<Route

path="/login"

element={<Login/>}

/>







{/* Youth Dashboard */}

<Route

path="/dashboard"

element={<UserDashboard/>}

/>







{/* Profile */}

<Route

path="/profile"

element={<Profile/>}

/>







{/* Applications */}

<Route

path="/applications"

element={<Applications/>}

/>







{/* Scholarships */}

<Route

path="/scholarships"

element={

<DashboardLayout>

<Scholarships/>

</DashboardLayout>

}

/>







{/* Youth Quest */}

<Route

path="/youth-quest"

element={

<DashboardLayout>

<YouthQuest/>

</DashboardLayout>

}

/>







{/* Settings */}

<Route

path="/settings"

element={

<DashboardLayout>

<Settings/>

</DashboardLayout>

}

/>







{/* YC Manager Dashboard */}

<Route

path="/yc-manager-dashboard"

element={

<YCManagerLayout>

<YCManagerDashboard />

</YCManagerLayout>

}

/>






{/* Admin Dashboard */}

<Route

path="/admin-dashboard"

element={

<AdminLayout>

<AdminDashboard/>

</AdminLayout>

}

/>
<Route

path="/youth-registration"

element={

<YCManagerLayout>

<YouthRegistration/>

</YCManagerLayout>

}

/>
<Route

path="/member-transfer"

element={

<YCManagerLayout>

<MemberTransfer/>

</YCManagerLayout>

}

/>
<Route

path="/volunteer-registration"

element={

<YCManagerLayout>

<VolunteerRegistration/>

</YCManagerLayout>

}

/>
<Route

path="/volunteer-activities"

element={

<YCManagerLayout>

<VolunteerActivityManagement/>

</YCManagerLayout>

}

/>

<Route

path="/certificates"

element={

<YCManagerLayout>

<ECertificateGeneration/>

</YCManagerLayout>

}

/>
<Route

path="/programmes"

element={

<YCManagerLayout>

<ProgrammeManagement/>

</YCManagerLayout>

}

/>
<Route

path="/programme-reports"

element={

<YCManagerLayout>

<ProgrammeReporting/>

</YCManagerLayout>

}

/>
<Route

path="/achievements"

element={

<YCManagerLayout>

<AchievementTracking/>

</YCManagerLayout>

}

/>
<Route

path="/initiatives"

element={

<YCManagerLayout>

<AdditionalInitiatives/>

</YCManagerLayout>

}

/>
<Route

path="/feedback"

element={

<YCManagerLayout>

<FeedbackManagement/>

</YCManagerLayout>

}

/>
<Route

path="/counselling"

element={

<YCManagerLayout>

<CounsellingBooking />

</YCManagerLayout>

}

/>
<Route

path="/admin-roles"

element={

<AdminLayout>

<RoleManagement/>

</AdminLayout>

}

/>

<Route

path="/admin-users"

element={

<AdminLayout>

<UserManagement/>

</AdminLayout>

}

/>
<Route

path="/admin-centres"

element={

<AdminLayout>

<YouthCentreManagement/>

</AdminLayout>

}

/>

<Route

path="/admin-programmes"

element={

<AdminLayout>

<ProgrammeReview/>

</AdminLayout>

}

/>

<Route

path="/admin-reports"

element={

<AdminLayout>

<AdminReports/>

</AdminLayout>

}

/>
<Route

path="/admin-logs"

element={

<AdminLayout>

<AuditLogs/>

</AdminLayout>

}

/>

</Routes>


</BrowserRouter>


)

}


export default App;