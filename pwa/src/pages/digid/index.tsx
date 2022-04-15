import * as React from "react";
import { navigate } from "gatsby";
import { isLoggedIn, setDigiDToken } from "../../services/auth";

const DigidIndex: React.FC = () => {
  React.useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
      return;
    }
    setDigiDToken();
  }, [setDigiDToken]);

  return <>Logging in..</>;
};

export default DigidIndex;
