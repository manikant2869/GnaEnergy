

import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "../containers/DefaultLayout";
import Main from "../pages/Main"


function AllRoutes() {

  return (
    <DefaultLayout>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </DefaultLayout>
  ) 
}
export default AllRoutes;
