import * as React from "react";
import { PrivateRoute } from "../../components/privateRoute/PrivateRoute";
import { MeldingenForm } from "../../forms/MeldingenForm";

const MeldingenIndex: React.FC = () => {
  return (
    <PrivateRoute>
      <MeldingenForm />
    </PrivateRoute>
  );
};

export default MeldingenIndex;
