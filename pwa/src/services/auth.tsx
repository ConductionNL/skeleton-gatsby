import { navigate } from "gatsby-link";
import jwtDecode, { JwtPayload } from "jwt-decode";
import APIService from "../apiService/apiService";

export interface IUnvalidatedUser {
  username: string;
  password: string;
}

export const isBrowser = (): boolean => typeof window !== "undefined";

export const handleDefaultLogin = async (data: IUnvalidatedUser, API: APIService) => {
  if (!isBrowser()) return;

  return await API.Login.login(data)
    .then((res) => {
      sessionStorage.setItem("username", res.data.username);
      setJWTIntoSession(res.data.jwtToken);
      API.setAuthentication(res.data.jwtToken);
      navigate("/");
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const setJWTIntoSession = (jwt: string) => sessionStorage.setItem("jwt", jwt);

export const redirectToDigiD = () => {
  location.href = `${process.env.GATSBY_BASE_URL}/digid/login?returnUrl=${process.env.GATSBY_FRONTEND_URL}/redirect`;
};

export const setDigiDToken = () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop: string) => searchParams.get(prop),
  });
  let jwt = params.token ?? null;
  if (jwt) {
    setJWTIntoSession(jwt);
    navigate("/");
  } else {
    throw new Error("JWT not given in query parameters, could not be set");
  }
};

export const isLoggedIn = (): boolean | void => {
  if (!isBrowser()) return;

  return !!sessionStorage.getItem("jwt");
};

export const handleLogout = (API: APIService): void => {
  if (!isBrowser()) return;

  sessionStorage.removeItem("username");
  sessionStorage.removeItem("jwt");
  API.removeAuthentication();
  navigate("/");
};

export const getUsername = (): string => {
  return sessionStorage.getItem("username") ?? "";
};
