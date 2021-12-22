import React, { useState } from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const toggleAuth = () => {
    setAuth(!auth);
  };
  const value = [auth, toggleAuth];
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
