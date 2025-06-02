import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectRoutePaths({ children }) {
  const isLogged = localStorage.getItem("isLogged") === "true";

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return children;
}
