import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AuthContext, { useAuth, authProvider } from "../contexts/auth";
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
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
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
    </AuthProvider>
  );
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();

  let user = auth.user;
  const sessionUser = window.sessionStorage.getItem("user");
  if (sessionUser) {
    user = sessionUser;
  }

  const localStorage = window.localStorage.getItem("user");
  if (localStorage) {
    user = localStorage;
  }

  if (!user) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  auth.signin(user, () => {});

  return children;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<any>(null);

  const signin = (user: string, callback: VoidFunction) => {
    return authProvider.signin(() => {
      setUser(user);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return authProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default Router;
