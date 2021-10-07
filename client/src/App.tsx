import React, { useContext, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { SERVER_URL } from "./config.keys";
import { SnackbarProvider } from "notistack";
import Landing from "./pages/Landing/index"
import Loader from "./pages/LoadingAnimation/Loader";







const App = () => {
  return (
    <div style={{ height: "auto" }}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path = "/" component={Landing} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};


export default App;
