import React from "react";
import { Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { useFormik } from "formik";

interface SignInFormValues {
  username: string;
  password: string;
  remember: boolean;
}

const SignIn = () => {
  const initialValues: SignInFormValues = {
    username: "",
    password: "",
    remember: true,
  };
  const navigate = useNavigate();
  const auth = useAuth();
  const formik = useFormik({
    initialValues,
    onSubmit: (values: SignInFormValues) => {
      try {
        const { username, remember } = values;
        auth.signin(username, () => {
          navigate("/", { replace: true });
          if (remember) {
            window.localStorage.setItem("user", username);
          } else {
            window.sessionStorage.setItem("user", username);
          }
        });
      } catch (error: any) {}
    },
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen m-4 lg:m-0">
      <div
        className="hidden bg-cover bg-no-repeat bg-center lg:block"
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL + "/landing.jpg"}")`,
        }}
      ></div>
      <div className="flex justify-center items-center">
        <div className="w-96 space-y-8 lg:w-96">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link
                to="/"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                start your 14-day free trial
              </Link>
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            method="POST"
            onSubmit={formik.handleSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-gray-600"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="mt-1 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="admin|guest"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="123456"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  onChange={formik.handleChange}
                  defaultChecked={formik.values.remember}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
