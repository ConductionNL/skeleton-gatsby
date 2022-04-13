import * as React from "react";
import { PrivateRoute } from "../../components/privateRoute/PrivateRoute";
import { MeldingenForm } from "../../forms/MeldingenForm";
import { MeldingenTable } from "../../tables/MeldingenTable";
import { AuthenticatedTemplate } from "../../templates/AuthenticatedTemplate/AuthenticatedTemplate";

const MeldingenIndex: React.FC = () => {
  return (
    <PrivateRoute>
      <AuthenticatedTemplate>
        <MeldingenForm />
        <MeldingenTable />
      </AuthenticatedTemplate>
    </PrivateRoute>
  );
};

export default MeldingenIndex;
