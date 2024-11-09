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
          <img
            src="public/assests/fourleaves.jpg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
        </>
      )}
    </>
  );
};

export default AuthLayoutForm;
