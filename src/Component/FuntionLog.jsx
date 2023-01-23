import React, { useState } from "react";
import { DataForm } from "./DataForm";

export const FunctionLog = () => {
  const adminUser = {
    email: "mohammed muzammil",
    password: "mohammed121",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match !");
    }
  };
  const Logout = () => {
    console.log("Logout");
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button>Logout</button>
        </div>
      ) : (
        <DataForm Login={Login} error={error} />
      )}
      {
        user.map((item)=>(
            <div>
                <h2>{item}</h2>
            </div>
    ))
      }
    </div>
   
  );
};
