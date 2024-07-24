import { createContext, useEffect, useState } from "react";
import apiCall from "../utils/api-call";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const existingUser = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
    setUser(existingUser);
  }, []);

  const register = async (body) => {
    const resp = await apiCall({
      endpoint: "/users",
      method: "POST",
      body,
    });

    if (!resp.error) {
      setUser(resp.data.data);
      localStorage.setItem("user", JSON.stringify(resp.data.data));
    }
    return resp;
  };

  const login = async (body) => {
    const resp = await apiCall({
      endpoint: "/users/login",
      method: "POST",
      body,
    });

    console.log(resp);

    if (!resp.error) {
      setUser(resp.data.data);
      localStorage.setItem("user", JSON.stringify(resp.data.data));
    }
    return resp;
  };

  const logout = () => {
    setUser();
    localStorage.removeItem("user");
  };

  const value = {
    user,
    register,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
