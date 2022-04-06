import * as React from "react";
import { APIProvider } from "../../apiService/apiContext";
import APIService from "../../apiService/apiService";
import { isLoggedIn } from "../../services/auth";
import Login from "../../pages/login";

/**
 * This components renders a layout for code that applies to all pages.
 *
 * @param {object} children Content that is rendered as body.
 * @returns JSX of the generated Layout.
 */
export default function Layout({ children }) {
  const [API, setAPI] = React.useState<APIService>(null);

  React.useEffect(() => {
    if (!isLoggedIn()) {
      setAPI(null);
      return;
    }

    const jwt = sessionStorage.getItem("jwt");
    !API && jwt && setAPI(new APIService(jwt));
  }, [API, isLoggedIn()]);

  return API ? (
    <APIProvider value={API}>
      <title>Conductor Admin Dashboard</title>
      <div>{children}</div>
    </APIProvider>
  ) : (
    <Login />
  );
}
