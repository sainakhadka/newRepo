import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

import RegStudent from "./AuthReg/Regstudent";
import RegMentor from "./AuthReg/Regmentor";

import StudentL from "./AuthLog/StudentL";
import MentorL from "./AuthLog/MentorL";
import AdminL from "./AuthLog/AdminL";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page with Nav */}
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Home />
            </>
          }
        />

        {/* Register */}
        <Route path="/register/student" element={<RegStudent />} />
        <Route path="/register/mentor" element={<RegMentor />} />

        {/* Login */}
        <Route path="/login/student" element={<StudentL />} />

        <Route path="/login/mentor" element={<MentorL />} />
        <Route path="/login/admin" element={<AdminL />} />
      </Routes>
    </Router>
  );
}

export default App;
