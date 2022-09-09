import React from "react";
import PageError from "../../components/PageError";

const ServerError = () => {
  return (
    <PageError error={{
      code: 500,
      message: "Internal server error.",
      content: "The server encountered something unexpected that didn't allow it to complete the request."
    }} />
  );
};

export default ServerError;
