/**
 * import { useContext } from "react";
import { Route, Redirect } from "react-router";
import { UserContext } from "../context/user.context";

export default function RoutesWrapper({
  path,
  exact,
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed, loading } = useContext(UserContext);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/home" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

 */