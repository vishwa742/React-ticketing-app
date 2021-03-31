import React, { useContext } from "react";
import { UserContext } from "./UserContext";

import "./App.css";

function Login() {
  const msg = useContext(UserContext);
  return (
    <div className="container">
      <h1>Login Page</h1>
      <div>{msg}</div>
    </div>
  );
}

export default Login;
