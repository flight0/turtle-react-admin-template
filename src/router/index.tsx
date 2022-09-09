import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../views/SignIn";
import Home from "../views/Home";
import Saas from "../views/Saas";
import Layout from "../views/Layout";
import FormGeneral from "../views/Forms/General";
import TableBasic from "../views/Tables/Basic";
import ChartJs from "../views/Charts/Chartjs";
import ApexCharts from "../views/Charts/Apex";
import NotFound from "../views/Errors/NotFound";
import ServerError from "../views/Errors/ServerError";
import SignUp from "../views/SignUp";
import Heroicon from "../views/Icons/Heroicon";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="saas" element={<Saas />} />
        <Route path="forms">
          <Route path="general" element={<FormGeneral />} />
        </Route>
        <Route path="tables">
          <Route path="basic" element={<TableBasic />} />
        </Route>
        <Route path="charts">
          <Route path="chartjs" element={<ChartJs />} />
          <Route path="apex" element={<ApexCharts />} />
        </Route>
        <Route path="icons">
          <Route path="heroicons" element={<Heroicon />} />
        </Route>
      </Route>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/500" element={<ServerError />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
