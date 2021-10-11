import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import GuestNameProvider from "./service/GuestNameContext";
import SettingsProvider from "./service/SettingsContext";
import TabsProvider from "./service/TabsContext";
import UserContextProvider, { UserContext } from "service/UserContext";
import { SnackbarProvider } from "notistack";
import Loader from "pages/LoadingAnimation/Loader";
import StartupAnimation from "pages/LoadingAnimation/StartupAnimation";
import Landing from "pages/Landing/index"

const Dashboard = lazy(() => import("./pages/Room/Room"));
const NavigateRoom = lazy(() => import("./pages/NavigateRooms/NavigateRooms"));



const App = () => {
  return (
    <div style={{ height: "auto" }}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/room/:id" component={Dashboard} />
            <Route path="/home" component={NavigateRoom} />
            <Route path="/startup-animation" component={StartupAnimation} />
            <Route path="/loader" component={Loader} />
            <Route exact path = "/" component={Landing} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

const contextWrappedApp = () => {
  return (
    <UserContextProvider>
      <GuestNameProvider>
        <SettingsProvider>
          <SnackbarProvider>
            <TabsProvider>
              <App />
            </TabsProvider>
          </SnackbarProvider>
        </SettingsProvider>
      </GuestNameProvider>
    </UserContextProvider>
  );
};

export default contextWrappedApp;
