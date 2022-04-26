import React, { useEffect, useState } from "react";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

const ExamplePage = (props: any) => {
  const [notifications, setNotifications] = useState<any>(null);
  const API: APIService = React.useContext(APIContext);

  useEffect(() => {
    API.Notification.getAll().then((res) => {
      setNotifications(res);
    });
  }, []);

  return (
    <>
      <h1>Example </h1>
      <div>Notifications{notifications?.length}</div>
    </>
  );
};

export default ExamplePage;
