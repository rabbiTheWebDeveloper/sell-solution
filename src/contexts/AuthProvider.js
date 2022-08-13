import React, { createContext } from "react";
import userManage from "../hook/userManage";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const allContexts = userManage();
  console.log(allContexts)
  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
