import * as React from "react";

const Login: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(null);

  // React.useEffect(() => {
  //   if (isLoggedIn() && window.location.pathname.includes("login")) {
  //     navigate("/");
  //   }
  // }, [isLoggedIn()]);

  const onSubmit = (event: any): void => {
    console.log(event.target);
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <h2>Login</h2>

      <label htmlFor="usernameInput">Username*</label>
      <input id="usernameInput" name="username" type="text" required />

      <label htmlFor="usernameInput">Password*</label>
      <input id="passwordInput" name="password" type="password" required />

      {/* {error && <span className="login-form-error">{error}</span>} */}

      {/* <button>{!loading ? "Login" : "Loading..."}</button> */}
    </form>
  );
};

export default Login;
