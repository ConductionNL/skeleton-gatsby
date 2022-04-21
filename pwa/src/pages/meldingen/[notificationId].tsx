import { PrivateRoute } from "../../components/privateRoute/PrivateRoute";
import { MeldingenForm } from "../../forms/MeldingenForm";
import { AuthenticatedTemplate } from "../../templates/AuthenticatedTemplate/AuthenticatedTemplate";

const MeldingenOverview = (props: any) => {
  const notificationId: string = props.params.notificationId === "new" ? null : props.params.notificationId;

  return (
    <PrivateRoute>
      <AuthenticatedTemplate>
        <MeldingenForm {...{ notificationId }} />
      </AuthenticatedTemplate>
    </PrivateRoute>
  );
};

export default MeldingenOverview;
