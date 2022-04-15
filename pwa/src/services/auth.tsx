import { navigate } from "gatsby-link";
import jwtDecode, { JwtPayload } from "jwt-decode";
import APIService from "../apiService/apiService";

export interface IUnvalidatedUser {
  username: string;
  password: string;
}

export const isBrowser = (): boolean => typeof window !== "undefined";

export const handleLogin = async (data: IUnvalidatedUser, API: APIService) => {
  if (!isBrowser()) return;

  return await API.Login.login(data)
    .then((res) => {
      sessionStorage.setItem("username", res.data.username);
      sessionStorage.setItem("JWT", res.data.jwtToken);
      API.setAuthentication(res.data.jwtToken);
      navigate("/");
    })
    .catch((err) => {
      throw new Error(err);
    });
};
export const handleDigiDLogin = () => {
  location.href =
    process.env.GATSBY_BASE_URL + "/digid/login?returnUrl=" + process.env.GATSBY_FRONTEND_URL + "/redirect";
};

export const isLoggedIn = (): boolean | void => {
  if (!isBrowser()) return;

  return !!sessionStorage.getItem("username");
};

export const handleLogout = (API: APIService): void => {
  if (!isBrowser()) return;

  sessionStorage.removeItem("username");
  sessionStorage.removeItem("JWT");
  API.removeAuthentication();
  navigate("/");
};

export const validateSession = (): boolean | void => {
  if (!isBrowser()) return;

  const token = sessionStorage.getItem("jwt");

  if (!token) return false;

  const decoded = jwtDecode<JwtPayload>(token);
  const expired = decoded?.exp && Date.now() >= decoded.exp * 1000;

  return !expired;
};

export const getUsername = (): string => {
  return sessionStorage.getItem("username") ?? "";
};
