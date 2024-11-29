// Loading animation from https://codepen.io/borntofrappe/pen/qBWqJYK

import React from "react";
import "../../Css/Loading.css";
import AnimationError from "./AnimationError";
const ErrorPage = () => {
  return (
    <>
      <AnimationError />
      <div>404 NOT FOUND</div>
    </>
  );
};

export default ErrorPage;
