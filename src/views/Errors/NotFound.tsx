import React from "react";
import PageError from "../../components/PageError";

const NotFound = () => {
  return (
    <PageError
      error={{
        code: 404,
        message: "Page not found.",
        content: "Sorry, the page you are looking for could not be found.",
      }}
    />
  );
};

export default NotFound;