import * as React from "react";
import "./login.css";
import APIService from "../../apiService/apiService";
import { setUser } from "../../services/auth";
import { navigate } from "gatsby-link";
// import Footer from "../../components/footer/footer";
// import Particles from "react-tsparticles";
import { isLoggedIn } from "../../services/auth";
// import { useForm } from "react-hook-form";
// import { InputPassword, InputText } from "../../components/formFields";

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

  const onSubmit = (event): void => {
    setLoading(true);
    let body = {};

    API.Login.login(body)
      .then((res) => {
        const user = { username: res.data.username };

        setUser(user);
        sessionStorage.setItem("jwt", res.data.jwtToken);
        sessionStorage.setItem("user", JSON.stringify(user));

        navigate("/");
      })
      .catch((err) => {
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

      <form className="login-form" onSubmit={onSubmit}>
        <h2>Login</h2>

        {/* <InputText label="Username" name="username" {...{ register, errors }} validation={{ required: true }} /> */}
        {/* <InputPassword label="Password" name="password" {...{ register, errors }} validation={{ required: true }} /> */}

        {/* {error && <span className="login-form-error">{error}</span>} */}

        <button>{!loading ? "Login" : "Loading..."}</button>
      </form>
    </>
  );
};

export default Login;
