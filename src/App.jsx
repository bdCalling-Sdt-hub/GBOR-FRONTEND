import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Earning from "./Pages/Dashboard/Earning/Earning";
import HostInfo from "./Pages/Dashboard/HostInfo/HostInfo";
import HostRequest from "./Pages/Dashboard/HostInfo/HostRequest";
import Notification from "./Pages/Dashboard/Notification/Notification";
import Email from "./Pages/Email/Email";
import Otp from "./Pages/Otp/Otp";
import Signin from "./Pages/Signin/Signin";
import UpdatePass from "./Pages/UpdatePass/UpdatePass";

import NotFound from "./404";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Banners from "./Pages/Dashboard/Banners/Banners";
import Setting from "./Pages/Dashboard/Setting/Setting";
import SettingPage from "./Pages/Dashboard/Setting/SettingPage/SettingPage";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/HowWork/Contact";
import HowWork from "./Pages/HowWork/HowWork";
import OurCreators from "./Pages/OurCreators/OurCreators";
import OurCreatorsDetails from "./Pages/OurCreatorsDetails/OurCreatorsDetails";
import WhoWe from "./Pages/WhoWe/WhoWe";

function App() {
  return (
    <>
      <div className="maincontainer">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/our-creators" element={<OurCreators />} />
            <Route path="/our-creators/:id" element={<OurCreatorsDetails />} />
            <Route path="/who-we-are" element={<WhoWe />} />
            <Route path="/how-it-work" element={<HowWork />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route
                path="/dashboard/notification"
                element={<Notification />}
              />
              <Route path="/dashboard/earning/:income" element={<Earning />} />
              <Route path="/dashboard/host-info" element={<HostInfo />} />
              <Route path="/dashboard/banner" element={<Banners />} />
              <Route path="/dashboard/host-request" element={<HostRequest />} />

              <Route path="/dashboard/setting" element={<Setting />}></Route>
              <Route
                path="/dashboard/setting/:dynamic"
                element={<SettingPage />}
              />
            </Route>

            <Route path="/signin" element={<Signin />} />
            <Route path="/email" element={<Email />} />
            <Route path="/forget-password" element={<Otp />} />
            <Route path="/update-password" element={<UpdatePass />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
