import { navigate } from "gatsby";
import { handleLogout } from "../services/auth";

const Logout: React.FC = () => {
  handleLogout();
  navigate("/");

  return <></>;
};

export default Logout;
