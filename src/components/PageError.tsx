import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PageError = ({
  error,
}: {
  error: {
    code: number;
    message: string;
    content: string;
  };
}) => {
  const navigate = useNavigate();

  const handleReturnBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="flex flex-col items-center text-gray-700">
        <h1 className="text-3xl font-medium">{error.code}</h1>
        <p className="mt-2 text-base">{error.message}</p>
        <p className="text-sm ">{error.content}</p>
        <div className="mt-4 text-sm">
          <Link
            to="/"
            className="bg-indigo-600 text-white rounded-md inline-block py-2 px-6"
          >
            Go Home
          </Link>
          <button
            className="bg-indigo-100 text-indigo-600 rounded-md py-2 px-6 ml-2"
            onClick={handleReturnBack}
          >
            Return Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageError;
