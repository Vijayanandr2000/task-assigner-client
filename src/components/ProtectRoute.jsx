import React from "react";
import { Route, Redirect } from "react-router-dom";

const Protect = ({ component, ...rest }) => {
  var RenderComponents = component;
  let token = JSON.parse(localStorage.getItem("auth"));
  return (
    <Route
      {...rest}
      render={() => {
        if (token) {
          return <RenderComponents />;
        } else {
          return <Redirect to={{ pathname: "/" }} />;
        }
      }}
    />
  );
};
export default Protect;
