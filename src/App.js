import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "./Context/UserContext";
import ProtectedRoute from "./Router/ProtectedRoute";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  )
};


export default App;
