import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Notes from "./Notes";
import { AuthProvider } from "../context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import NavBar from "./NavBar";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <PrivateRoute path="/notes" component={Notes} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/login" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
