import React, { useState } from "react";

export const DataForm = (Login, error) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="for-inner">
        <h2>Login</h2>
        {/*ERROR*/}
        <div className="for-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) =>
              setDetails({ ...setDetails, name: e.target.value })
            }
            value={details.name}
          />
        </div>
        <div className="for-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) =>
              setDetails({ ...setDetails, email: e.target.value })
            }
            value={details.email}
          />
        </div>
        <div className="for-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...setDetails, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
};
