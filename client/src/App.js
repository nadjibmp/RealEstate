import MainDashboard from './component/Dashboard/mainDashboard/MainDashboard';
import MsgDashboard from './component/Dashboard/MsgDashboard/MsgDashboard';
import PropDashboard from './component/Dashboard/proprieteDashboard/PropDashboard';
import Liked from './component/Dashboard/liked/Liked';
import Profile from './component/Dashboard/profile/Profile';
import Notification from './component/Dashboard/NotificationDashboard/Notficiation';
import Agenda from './component/Dashboard/agenda/Agenda';
import AddProperty from './component/Dashboard/addproperty/AddProperty';
import DashBoard from './pages/DashBoard';
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import SignInn from './pages/SignInn';
import Annonces from './pages/Annonces';
import Propertie from './pages/Propertie';
import { AuthProvider } from './component/GlobalContext/Auth';
import { Navbar, Footer } from './component/index';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import RecoverPassword from './pages/RecoverPassword';

import { SocketProvider } from "./component/GlobalContext/SocketContext";

function App() {
  return (
    <AuthProvider>
      <SocketProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/recoverPassword' element={<RecoverPassword />} />
          <Route path='/inscrire' element={<SignUp />} />
          <Route path='/apropos' element={<Home />} />
          <Route path="/enregistrer" element={<SignInn />} />
          <Route path='/annonces' element={<Annonces />} />
          <Route path="/proprietes/:id" element={<Propertie />} />
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="main" element={<MainDashboard />} />
            <Route path="properties" element={<PropDashboard />} />
            <Route path="addproperty" element={<AddProperty />} />
            <Route path="calendar" element={<Agenda />} />
            <Route path="liked" element={<Liked />} />
            <Route path="notifications" element={<Notification />} />
            <Route path="messages" element={<MsgDashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
      </SocketProvider>
    </AuthProvider>
  );
}

export default App;
