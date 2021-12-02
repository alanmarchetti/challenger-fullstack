import { Switch, Route } from "react-router-dom";

// components
import Signin from "../templates/Signin";
import Signup from "../templates/Signup";
import Home from "../templates/Home";
import Profile from "../templates/Profile";
import ChatPlatForm from "../templates/ChatPlatForm"

export default function RoutesWrapper() {
  return (
    <Switch>
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route exact path="/" component={Home}  />
      <Route path="/profile" component={Profile}  />
      <Route path="/chatting/:roomId/:username" component={ChatPlatForm}/>
    </Switch>
  );
}

