import React from "react";
import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    // When using - throw new Response()
    // message = JSON.parse(error.data).message;

    // When using json from react-router
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>{message}</PageContent>
    </>
  );
};

export default Error;
