import * as React from "react";
import "./login.css";
import APIService from "../../apiService/apiService";
import { setUser } from "../../services/auth";
import { navigate } from "gatsby-link";
import { isLoggedIn } from "../../services/auth";
import {
  Heading1,
  FormField,
  Textbox,
  Button,
} from "@nl-design-system-unstable/example-next.js/src/components/utrecht";

const Login: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const API: APIService = new APIService("");
  const login = (e) => {
    e.preventDefault();

    setLoading(true);
    let body = {
      username: e.target.username?.value,
      password: e.target.password?.value,
    };

    API.Login.login(body)
      .then((res) => {
        const user = { username: res.data.username };

        setUser(user);
        sessionStorage.setItem("jwt", res.data.jwtToken);
        sessionStorage.setItem("user", JSON.stringify(user));

        navigate("/");
      })
      .catch((err) => {
        console.log(`Login went wrong: ${err}`);
        throw new Error(`Login went wrong: ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    if (isLoggedIn() && window.location.pathname.includes("login")) {
      navigate("/");
    }
  }, [isLoggedIn()]);

  return (
    <>
      <Heading1>Welcome to the Skeleton!</Heading1>

      <form onSubmit={login}>
        <FormField>
          <Textbox name="username" type="text" required />
        </FormField>
        <FormField>
          <Textbox name="password" type="password" required />
        </FormField>

        <Button type="submit">{!loading ? "Login" : "Loading..."}</Button>
      </form>
    </>
  );
};

export default Login;
