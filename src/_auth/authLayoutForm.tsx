import { Outlet, Navigate } from "react-router-dom";
import React from "react";

const AuthLayoutForm = () => {
  const isAuthentic = false;
  return (
    <>
      {isAuthentic ? (
        <Navigate to="/" />
      ) : (
        <>
          {" "}
          <section>
            <Outlet />
          </section>
        </>
      )}
    </>
  );
};

export default AuthLayoutForm;
