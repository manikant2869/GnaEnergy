

import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "../containers/DefaultLayout";
import Home from "../pages/Home"


function AllRoutes() {

  return (
    <DefaultLayout>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </DefaultLayout>
  ) 
}
export default AllRoutes;
