import * as React from "react";
import { isLoggedIn } from "../services/auth";
import { Heading1, Article } from "../components/utrecht-components";

const IndexPage: React.FC = () => {
  return (
    <>
      <Heading1>Skeleton Application</Heading1>
      {isLoggedIn() && <Article>U are logged in</Article>}
    </>
  );
};

export default IndexPage;
