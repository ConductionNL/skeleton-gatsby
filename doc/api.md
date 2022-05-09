# API section

Understanding of the following is recommended:

- API's and how data is fetched
- [React Query](https://react-query.tanstack.com/)

## API service

The Skeleton Application does API handling via the `apiService` in the application. The service is built on [`axios`](https://axios-http.com/docs/intro) to fetch API data. Using this service saves many lines of code by calling upon methods in the component classes.

The `apiService.ts` is found in the `\src\apiService` folder and structured with `resources` and `services`. Specific services such as logging are placed in `services`, and other calls are stored in `resources`. The example shown is the `Notifications` resource:

```TypeScript

import { Send } from "../apiService";
import { AxiosInstance } from "axios";

export default class Notification {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    this._instance = _instance;
  }

  public getAll = async (): Promise<any> => {
    const { data } = await Send(this._instance, "GET", "/notifications");
    return data.results;
  };

  public create = async (variables: { payload: any }): Promise<any> => {
    const { payload } = variables;
    const { data } = await Send(this._instance, "POST", "/notifications", payload);
    return data;
  };
}
```

---

**_NOTE_**
This component needs to be imported in `apiService\apiService.ts` along with a getter method. In the `apiService.tsx` are example existing already.

---

This is enough to directly use the service in a component in a few steps :

```TypeScript
import * as React from "react";
import APIService from "../apiService/apiService";// imports
import APIContext from "../apiService/apiContext";// Imports

const ExamplePage: React.FC = (INotification | null) => {
  const [notifications, setNotifications] = useState<any>(null); // state
  const API: APIService = React.useContext(APIContext);          // accessing the service

  React.useEffect(() => {
    API.Notification.getAll().then((res) => {
      setNotifications(res);
    }).catch((err)=>{
      throw new Error(err);
    });
  }, []); // trigger the service on pageload with useEffect

  return (
    return (
    notifications && // present your data...
  )
  ); // display the data
};

export default ExamplePage;
```

## Using React Query

The skeleton application uses [React Query](https://react-query.tanstack.com/) for fast caching of API data. If an API call is made before to the Common Gateway, the returned data is stored locally in the React Query cache. React Query looks for updates underwater and fetches the updates.

This logic is a great feature, and that's why the API calls may look a bit complex, but it is worth the time to understand how it works.

Below is the flow described of how it works in the Skeleton Application:

## API installation

To be added
