import { Switch } from "react-router-dom";
import Route from './auth.routes';
// components
import Signin from "../templates/Signin";
import Signup from "../templates/Signup";
import Home from "../templates/Home";
import Profile from "../templates/Profile";
import ChatPlatForm from "../templates/ChatPlatForm"

export default function RoutesWrapper() {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} isPrivate  />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/chatting/:roomId/:username" component={ChatPlatForm} isPrivate/>
    </Switch>
  );
}