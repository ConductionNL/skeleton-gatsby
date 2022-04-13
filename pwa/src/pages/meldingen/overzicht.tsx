import * as React from "react";
import { PrivateRoute } from "../../components/privateRoute/PrivateRoute";
import { MeldingenTable } from "../../tables/MeldingenTable";
import { AuthenticatedTemplate } from "../../templates/AuthenticatedTemplate/AuthenticatedTemplate";

const MeldingenOverview: React.FC = () => {
  return (
    <PrivateRoute>
      <AuthenticatedTemplate>
        <MeldingenTable />
      </AuthenticatedTemplate>
    </PrivateRoute>
  );
};

export default MeldingenOverview;
