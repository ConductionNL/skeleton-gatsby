import * as React from "react";
import { useQueryClient } from "react-query";
import { PrivateRoute } from "../../components/privateRoute/PrivateRoute";
import { useNotification } from "../../hooks/notifications";
import { MeldingenTable } from "../../tables/MeldingenTable";
import { AuthenticatedTemplate } from "../../templates/AuthenticatedTemplate/AuthenticatedTemplate";

const MeldingenOverview: React.FC = () => {
  const queryClient = useQueryClient();

  const _useNotification = useNotification(queryClient);
  const getNotifications = _useNotification.getAll();

  return (
    <PrivateRoute>
      <AuthenticatedTemplate>
        <MeldingenTable meldingen={getNotifications.data ?? []} />
      </AuthenticatedTemplate>
    </PrivateRoute>
  );
}

export default MeldingenOverview;
