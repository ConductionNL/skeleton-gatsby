import * as React from "react";
import "./login.css";
import APIService from "../../apiService/apiService";
import { setUser } from "../../services/auth";
import { navigate } from "gatsby-link";
import { isLoggedIn } from "../../services/auth";
// import { useForm } from "react-hook-form";
// import { InputPassword, InputText } from "../../components/formFields";
import { FormField, Textbox, Button } from "../../components/utrecht-components";

const Login: React.FC = () => {
  // const [error, setError] = React.useState<string>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const API: APIService = new APIService("");

  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   formState: { errors },
  // } = useForm();

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
        // setValue("username", "");
        // setValue("password", "");
        // setError(err.response.data.message);
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
      <h1>Welcome to the Skeleton!</h1>

      <form onSubmit={login}>
        <h2>Login</h2>

        <FormField>
          <Textbox name="username" type="text" required />
        </FormField>
        <FormField>
          <Textbox name="password" type="password" required />
        </FormField>

        {/* <InputText label="Username" name="username" {...{ register, errors }} validation={{ required: true }} /> */}
        {/* <InputPassword label="Password" name="password" {...{ register, errors }} validation={{ required: true }} /> */}

        {/* {error && <span className="login-form-error">{error}</span>} */}

        <Button type="submit">{!loading ? "Login" : "Loading..."}</Button>
      </form>
    </>
  );
};

export default Login;
