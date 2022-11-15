import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./manager/Login/Login";
import { Password } from "./manager/Login/login.styled";
import Register from "./manager/Register/Register";

const Rutas = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </div>
  );
};

export default Rutas;
