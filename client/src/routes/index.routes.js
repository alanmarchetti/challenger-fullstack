import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Signin from "../templates/Signin";
import Signup from "../templates/Signup";
import Home from "../templates/Home";
import Profile from "../templates/Profile";

export default function RoutesWrapper() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
