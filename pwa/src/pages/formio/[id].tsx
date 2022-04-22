import * as React from "react";
import { PrivateRoute } from "../../components/privateRoute/PrivateRoute";
import { useQueryClient } from "react-query";
import { useForms } from "../../hooks/forms";
import APIService from "../../apiService/apiService";
import APIContext from "../../apiService/apiContext";

const FormIOIndex: React.FC = (props: any) => {
  const formId: string = props.params.id === "new" ? null : props.params.id;
  const API: APIService = React.useContext(APIContext);
  const queryClient = useQueryClient();
  const _useForms = useForms(queryClient);
  const getForm = _useForms.getOne(formId);
  const [renderedForm, setRenderedForm] = React.useState(null);
  const [fetchedForm, setFetchedForm] = React.useState(null);

  React.useEffect(() => {
    // if (renderedForm) return;
    setFetchedForm(getForm.data);
  }, [getForm]);

  React.useEffect(() => {
    if (!fetchedForm) return;
    import("@formio/react").then((formio) => {
      const { Form } = formio;
      setRenderedForm(<Form src={fetchedForm} onSubmit={saveObject} />);
    });
  }, [fetchedForm]);

  const saveObject = (event: any) => {
    let body = event.data;
    delete body.submit;

    API.Forms.postForm(formId, body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        throw new Error("POST form to wp error: " + err);
      });
  };

  return <PrivateRoute>{renderedForm && renderedForm}</PrivateRoute>;
};

export default FormIOIndex;
