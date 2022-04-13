import { navigate } from "gatsby-link";
import jwtDecode, { JwtPayload } from "jwt-decode";
import APIService from "../apiService/apiService";

export interface IUnvalidatedUser {
  username: string;
  password: string;
}

const API: APIService = new APIService();

export const isBrowser = (): boolean => typeof window !== "undefined";

export const handleLogin = async (data: IUnvalidatedUser) => {
  if (!isBrowser()) return;

  return await API.Login.login(data)
    .then((res) => {
      sessionStorage.setItem("username", res.data.username);
      sessionStorage.setItem("jwt", res.data.jwtToken);
      navigate("/");
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const isLoggedIn = (): boolean | void => {
  if (!isBrowser()) return;

  return !!sessionStorage.getItem("username");
};

export const logout = (): void => {
  if (!isBrowser()) return;

  sessionStorage.removeItem("username");
  sessionStorage.removeItem("jwt");
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
