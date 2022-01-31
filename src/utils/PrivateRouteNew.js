import { Route, Redirect } from "react-router-dom";
import MainComponent from "../components/MainComponents";
import AuthHandler from "./AuthHandler";

export var PrivateRouteNew = ({ page, activepage, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        AuthHandler.loggedIn() ? (
          <MainComponent page={page} activepage={activepage} {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

// this above private function is for user if logged in then show components else redirect back to login page
