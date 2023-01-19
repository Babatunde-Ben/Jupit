import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <main className="bg-eerie_black min-h-screen relative">
      <p
        onClick={() => navigate("/")}
        className="cursor-pointer text-lg font-medium"
      >
        Go home
      </p>
    </main>
  );
};

export default ErrorPage;
