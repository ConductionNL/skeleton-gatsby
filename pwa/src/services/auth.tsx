import { navigate } from "gatsby-link";
import jwtDecode, { JwtPayload } from "jwt-decode";

type IUser = {
  username: string;
  jwtToken?: string;
};

export const isBrowser = () => typeof window !== "undefined";

export const getUser = (): IUser | null => {
  const user = window.sessionStorage.getItem("user");

  if (user) {
    return JSON.parse(user);
  }

  return null;
};
export const setUser = (user: IUser | null) => window.sessionStorage.setItem("user", JSON.stringify(user));

export const handleLogin = (data: IUser) => {
  return setUser(data);
};

export const isLoggedIn = (): boolean => {
  const user = getUser();
  return !!user?.username;
};

export const logout = () => {
  setUser(null);
  window.sessionStorage.removeItem("jwt");
  window.sessionStorage.removeItem("user");
  navigate("/login");
};

export const validateSession = () => {
  const token = sessionStorage.getItem("jwt");

  if (!token) return false;

  const decoded = jwtDecode<JwtPayload>(token);
  const expired = decoded?.exp && Date.now() >= decoded.exp * 1000;

  return !expired;
};

export const setJwtUser = (userData: IUser) => {
  const user: IUser = { username: userData.username };

  setUser(user);
  userData.jwtToken && sessionStorage.setItem("jwt", userData.jwtToken);
  sessionStorage.setItem("user", JSON.stringify(user));
};
