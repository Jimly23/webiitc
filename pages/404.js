import ErrorPage from "@/components/pagetemplate/ErrorPage";
import React from "react";

const notFound = () => {
  return <ErrorPage statusCode={404} message={"Page Not Found"} />;
};

export default notFound;
