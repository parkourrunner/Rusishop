import React from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>

      <h1>روسی شاپ</h1>
    </>
  );
}
