import * as React from "react";
import { navigate } from "gatsby";
import { handleLogout } from "../services/auth";

const Logout: React.FC = () => {
  React.useEffect(() => {
    handleLogout();
    navigate("/");
  });

  return <></>;
};

export default Logout;
