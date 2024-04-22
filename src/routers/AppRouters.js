import React from "react";
import NavBar from "../components/ui/NavBar";
import Multimedia from "../components/multimedia/Multimedia";
import Footer from "../components/ui/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "../components/ui/NotFound";
import Generos from "../components/generos/Generos";
import Directores from "../components/directores/Directores";
import Productoras from "../components/productoras/Productoras";
import Tipos from "../components/tipos/Tipos";

export default function AppRouters() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Routes>
            <Route path="/" element={<Multimedia/>}/>
            <Route path="/Generos" element={<Generos/>}/>
            <Route path="/Directores" element={<Directores/>}/>
            <Route path="/Productoras" element={<Productoras/>}/>
            <Route path="/Tipos" element={<Tipos/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}
