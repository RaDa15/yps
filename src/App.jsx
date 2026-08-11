import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// ======================
// PUBLIC
// ======================

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PublicCertificateVerify from "./pages/PublicCertificateVerify";

// ======================
// DASHBOARDS
// ======================

import YouthDashboard from "./pages/dashboards/YouthDashboard";
import DirectorDashboard from "./pages/dashboards/DirectorDashboard";
import PycdAdminDashboard from "./pages/dashboards/PycdAdminDashboard";
import TeoDeoDashboard from "./pages/dashboards/TeoDeoDashboard";
import NationalFocalDashboard from "./pages/dashboards/NationalFocalDashboard";
import NetworkFocalDashboard from "./pages/dashboards/NetworkFocalDashboard";
import YCManagerDashboard from "./pages/dashboards/YCManagerDashboard";

// ======================
// DIRECTOR
// ======================

import DirectorLayout from "./layouts/DirectorLayout";
import DirectorHome from "./components/director/DirectorHome";
import NationalOverview from "./components/director/NationalOverview";
import YouthCentrePerformance from "./components/director/YouthCentrePerformance";
import ProgrammeInsights from "./components/director/ProgrammeInsights";
import DirectorVolunteerAnalytics from "./components/director/VolunteerAnalytics";
import PolicyInsights from "./components/director/PolicyInsights";
import DirectorReports from "./components/director/DirectorReports";
import DirectorYouthAnalytics from "./components/director/YouthAnalytics";
import DirectorSettings from "./components/director/DirectorSettings";
import DirectorProfile from "./pages/director/DirectorProfile";

// ======================
// PYCD
// ======================

import PYCDLayout from "./layouts/PYCDLayout";
import PYCDYouthAnalytics from "./components/pycd/YouthAnalytics";
import CentrePerformance from "./components/pycd/YouthCentrePerformance";
import ProgrammeAnalytics from "./components/pycd/ProgrammeAnalytics";
import PYCDVolunteerAnalytics from "./components/pycd/VolunteerAnalytics";
import ApprovalMonitoring from "./components/pycd/ApprovalMonitoring";
import ReportsExport from "./components/pycd/ReportsExport";
import Notifications from "./components/pycd/Notifications";
import MasterData from "./components/pycd/MasterData";
import SystemSettings from "./components/pycd/SystemSettings";
import SystemManagement from "./components/pycd/SystemManagement";
import UserManagement from "./components/pycd/UserManagement";

// ======================
// TEO / DEO
// ======================

import TEODEOLayout from "./layouts/TEODEOLayout";
import TEOAnalytics from "./components/teodeo/TEOAnalytics";
import TEOProgrammeMonitoring from "./components/teodeo/ProgrammeMonitoring";
import YouthServiceMonitoring from "./components/teodeo/YouthServiceMonitoring";
import VolunteerOversight from "./components/teodeo/VolunteerOversight";
import TEOReports from "./components/teodeo/TEOReports";
import TEONotifications from "./components/teodeo/TEONotifications";
import TEOSettings from "./components/teodeo/TEOSettings";

// ======================
// YC MANAGER
// ======================

import YCManagerLayout from "./layouts/YCManagerLayout";
import YouthRegistration from "./pages/YouthRegistration";
import MemberTransfer from "./pages/MemberTransfer";
import VolunteerRegistration from "./pages/VolunteerRegistration";
import VolunteerActivityManagement from "./pages/VolunteerActivityManagement";
import ECertificateGeneration from "./pages/ECertificateGeneration";
import ProgrammeManagement from "./pages/ProgrammeManagement";
import ProgrammeReporting from "./pages/ProgrammeReporting";
import AchievementTracking from "./pages/AchievementTracking";
import FeedbackManagement from "./pages/FeedbackManagement";
import CounsellingBooking from "./pages/CounsellingBooking";
import YCManagerSettings from "./pages/YCManagerSettings";

// ======================
// NATIONAL FOCAL POINT
// ======================

import NationalLayout from "./layouts/NationalLayout";
import ActivityMonitoring from "./components/national/ActivityMonitoring";
import NationalPerformance from "./components/national/NationalPerformance";
import NationalNetworkOverview from "./components/national/NationalOverview";
import NationalReports from "./components/national/NationalReports";
import NationalNotifications from "./components/national/NationalNotifications";
import NationalSettings from "./components/national/NationalSettings";
import VolunteerAnalytics from "./components/national/VolunteerAnalytics";

// ======================
// NETWORK FOCAL POINT
// ======================

import NetworkLayout from "./layouts/NetworkLayout";
import NetworkHome from "./components/network/NetworkHome";
import NetworkOverview from "./components/network/NetworkOverview";
import VolunteerApplication from "./components/network/VolunteerApplications";
import ActivityManagement from "./components/network/ActivityManagement";
import ApprovalQueue from "./components/network/ApprovalQueue";
import NetworkReports from "./components/network/NetworkReports";
import NetworkNotifications from "./components/network/NetworkNotifications";
import NetworkSettings from "./components/network/NetworkSettings";
import NetworkManagement from "./components/network/NetworkManagement";


// ============================================================
// YOUTH
// ============================================================

import YouthLayout from "./layouts/YouthLayout";
import ActivityDiscovery from "./components/youth/ActivityDiscovery";
import ActivityHistory from "./components/youth/ActivityHistory";
import YouthCertificates from "./components/youth/YouthCertificates";
import YouthAchievements from "./components/youth/YouthAchievements";
import YouthLeaderboard from "./components/youth/YouthLeaderboard";
import YouthProgrammes from "./components/youth/YouthProgrammes";
import YouthScholarships from "./components/youth/YouthScholarships";
import YouthProfile from "./components/youth/YouthProfile";
import YouthDigitalID from "./components/youth/YouthDigitalID";
import YouthSettings from "./components/youth/YouthSettings";


// ============================================================
// APP
// ============================================================

function App() {
  return (
    <Routes>

      {/* ==================================================
          PUBLIC
      ================================================== */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/verify-certificate"
        element={<PublicCertificateVerify />}
      />

      <Route
        path="/verify-certificate/:certId"
        element={<PublicCertificateVerify />}
      />

      {/* ==================================================
          DIRECTOR / HOD
      ================================================== */}

      <Route
        path="/director-dashboard"
        element={<DirectorLayout />}
      >

        <Route
          index
          element={<DirectorHome />}
        />

        <Route
          path="overview"
          element={<NationalOverview />}
        />

        <Route
          path="youth-analytics"
          element={<DirectorYouthAnalytics />}
        />

        <Route
          path="centres"
          element={<YouthCentrePerformance />}
        />

        <Route
          path="programmes"
          element={<ProgrammeInsights />}
        />

        <Route
          path="volunteers"
          element={<DirectorVolunteerAnalytics />}
        />

        <Route
          path="policy"
          element={<PolicyInsights />}
        />

        <Route
          path="reports"
          element={<DirectorReports />}
        />

        <Route
          path="settings"
          element={<DirectorSettings />}
        />

        <Route
  path="profile"
  element={<DirectorProfile />}
/>

      </Route>


      {/* ==================================================
          PYCD
      ================================================== */}

      <Route
        path="/pycd-dashboard"
        element={<PYCDLayout />}
      >

        <Route
          index
          element={<PycdAdminDashboard />}
        />

        <Route
          path="youth-analytics"
          element={<PYCDYouthAnalytics />}
        />

        <Route
          path="centres"
          element={<CentrePerformance />}
        />

        <Route
          path="programmes"
          element={<ProgrammeAnalytics />}
        />

        <Route
          path="volunteers"
          element={<PYCDVolunteerAnalytics />}
        />

        <Route
          path="approvals"
          element={<ApprovalMonitoring />}
        />

        <Route
          path="reports"
          element={<ReportsExport />}
        />

        <Route
          path="notifications"
          element={<Notifications />}
        />

        <Route
          path="master-data"
          element={<MasterData />}
        />

        <Route
          path="system-management"
          element={<SystemManagement />}
        />

        <Route
          path="settings"
          element={<SystemSettings />}
        />

        <Route
          path="users"
          element={<UserManagement />}
        />

      </Route>


      {/* ==================================================
          TEO / DEO
      ================================================== */}

      <Route
        path="/teo-deo-dashboard"
        element={<TEODEOLayout />}
      >

        <Route
          index
          element={<TeoDeoDashboard />}
        />

        <Route
          path="analytics"
          element={<TEOAnalytics />}
        />

        <Route
          path="programmes"
          element={<TEOProgrammeMonitoring />}
        />

        <Route
          path="youth"
          element={<YouthServiceMonitoring />}
        />

        <Route
          path="volunteers"
          element={<VolunteerOversight />}
        />

        <Route
          path="reports"
          element={<TEOReports />}
        />

        <Route
          path="notifications"
          element={<TEONotifications />}
        />

        <Route
          path="settings"
          element={<TEOSettings />}
        />

      </Route>


      {/* ==================================================
          YC MANAGER
      ================================================== */}

      <Route
        path="/yc-manager-dashboard"
        element={<YCManagerLayout />}
      >

        <Route
          index
          element={<YCManagerDashboard />}
        />

        <Route
          path="youth-registration"
          element={<YouthRegistration />}
        />

        <Route
          path="member-transfer"
          element={<MemberTransfer />}
        />

        <Route
          path="volunteer-registration"
          element={<VolunteerRegistration />}
        />

        <Route
          path="volunteer-activities"
          element={<VolunteerActivityManagement />}
        />

        <Route
          path="certificates"
          element={<ECertificateGeneration />}
        />

        <Route
          path="programmes"
          element={<ProgrammeManagement />}
        />

        <Route
          path="programme-reports"
          element={<ProgrammeReporting />}
        />

        <Route
          path="achievements"
          element={<AchievementTracking />}
        />

        <Route
          path="feedback"
          element={<FeedbackManagement />}
        />

        <Route
          path="counselling"
          element={<CounsellingBooking />}
        />

        <Route
          path="settings"
          element={<YCManagerSettings />}
        />

      </Route>


      {/* ==================================================
          NATIONAL FOCAL POINT
      ================================================== */}

      <Route
        path="/national-focal-dashboard"
        element={<NationalLayout />}
      >

        {/* Dashboard */}

        <Route
          index
          element={<NationalFocalDashboard />}
        />

        {/* Network Overview */}

        <Route
          path="networks"
          element={<NationalNetworkOverview />}
        />

        {/* Volunteer Analytics */}

        <Route
          path="volunteers"
          element={<VolunteerAnalytics />}
        />

        {/* Activity Monitoring */}

        <Route
          path="activities"
          element={<ActivityMonitoring />}
        />

        {/* Network Performance */}

        <Route
          path="performance"
          element={<NationalPerformance />}
        />

        {/* Reports */}

        <Route
          path="reports"
          element={<NationalReports />}
        />

        {/* Notifications */}

        <Route
          path="notifications"
          element={<NationalNotifications />}
        />

        {/* Settings */}

        <Route
          path="settings"
          element={<NationalSettings />}
        />

      </Route>


      {/* ==================================================
          NETWORK FOCAL POINT
      ================================================== */}

      <Route
        path="/network-focal-dashboard"
        element={<NetworkLayout />}
      >

        {/* Dashboard */}

        <Route
          index
          element={<NetworkHome />}
        />

        {/* Network Overview */}

        <Route
          path="overview"
          element={<NetworkOverview />}
        />

        {/* Volunteer Management */}

        <Route
          path="volunteers"
          element={<VolunteerApplication />}
        />

        {/* Activity Monitoring */}

        <Route
          path="activities"
          element={<ActivityManagement />}
        />

        {/* Approval Queue */}

        <Route
          path="approvals"
          element={<ApprovalQueue />}
        />

        {/* Network Performance */}

        <Route
          path="performance"
          element={<NetworkManagement />}
        />

        {/* Reports */}

        <Route
          path="reports"
          element={<NetworkReports />}
        />

        {/* Notifications */}

        <Route
          path="notifications"
          element={<NetworkNotifications />}
        />

        {/* Settings */}

        <Route
          path="settings"
          element={<NetworkSettings />}
        />

      </Route>

{/* ==================================================
    YOUTH / VOLUNTEER PORTAL
================================================== */}

<Route
  path="/dashboard"
  element={<YouthLayout />}
>
  {/* Dashboard */}
  <Route
    index
    element={<YouthDashboard />}
  />

  {/* Activity Discovery */}
  <Route
    path="discover"
    element={<ActivityDiscovery />}
  />

  {/* Activity History */}
  <Route
    path="history"
    element={<ActivityHistory />}
  />

  {/* Certificates */}
  <Route
    path="certificates"
    element={<YouthCertificates />}
  />

  {/* Achievements */}
  <Route
    path="achievements"
    element={<YouthAchievements />}
  />

  {/* Leaderboard */}
  <Route
    path="leaderboard"
    element={<YouthLeaderboard />}
  />

  {/* Programmes */}
  <Route
    path="programmes"
    element={<YouthProgrammes />}
  />

  {/* Scholarships */}
  <Route
    path="scholarships"
    element={<YouthScholarships />}
  />

  {/* Profile */}
  <Route
    path="profile"
    element={<YouthProfile />}
  />
  {/* Digital ID */}
  <Route
    path="digital-id"
    element={<YouthDigitalID />}
  />

  {/* Settings */}
  <Route
    path="settings"
    element={<YouthSettings />}
  />
</Route>

      {/* ==================================================
          404
      ================================================== */}

      <Route
        path="*"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />

    </Routes>
  );
}

export default App;