import React from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (toke) => {},
  logout: () => {},
});

export default AuthContext;
