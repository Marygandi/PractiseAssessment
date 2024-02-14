import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin";
import RegisterUser from "./Components/RegisterUser";
import MenuBar from "./Components/MenuBar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <MenuBar />
        <Routes>
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/RegisterUser" element={<RegisterUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
