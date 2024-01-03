/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post(
        "/session",
        { email, password },
        { withCredentials: true }
      );

      const { user } = response.data;

      localStorage.setItem(
        "@foodexplorer:user",
        JSON.stringify({ email, password })
      );

      setData({ user });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");

    if (user) {
      setData({ user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
