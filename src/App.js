import React from "react";

//ROUTER
import { Router, Route } from "react-router-dom";
import { routes } from "./utils/routes";
import router from "./utils/router";

//STYLING
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route
      key={key}
      exact
      path={path}
      component={component}
    />
  ));

  return (
    <>
      <Router history={router}>{routeComponents}</Router>
    </>
  );
}

export default App;
