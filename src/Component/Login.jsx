import React, { useState } from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  // const [warning, setWarning] = useState("");

  const handleCancel = () => {
    // setWarning(<Alert severity="success">Data is clear sucessfull</Alert>);
    toast.info("Data is Clear Successfull",{position:"top-center"});
    setEmail("");
    setPassword("");
    // <p>{warning}</p>;
  };

  const handledelete = (elem) => {
    const result = allEntry.filter((elemitem) => elemitem != elem);
    alert = "this valid";
    setAllEntry(result);
  };

  const submitform = (e) => {
    // setWarning(<Alert severity="success">Data Successfull added!</Alert>);
    toast.success("Data is added successfull",{position:"top-center"});
    e.preventDefault();
    const newEntry = { email: email, password: password };

    setAllEntry([...allEntry, newEntry]);
  };

  return (
    <>
      <form action="" onSubmit={submitform} className="logm">
        <div>
          {/* <p>{warning}</p> */}
          <h1>Login page</h1>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2922/2922510.png"
            style={{ width: 100 }}
            alt=""
          />
          <br />
          <br />
          <label htmlFor="email">Email* </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter username and mobile"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password* </label>
          <br />
          <input
            type="password"
            name="password"
            id="password "
            placeholder="enter you password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <u>
            <i>
              <h6 style={{ marginLeft: 130 }}>Forget Paswword</h6>
            </i>
          </u>
        </div>
        <Button
          variant="contained"
          type="submit"
          value={password}
          style={{ margin: 15, borderRadius: 40, margin: 10 }}
        >
          login
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleCancel}
          style={{ borderRadius: 40 }}
        >
          Clear
        </Button>

        <br />
        <br />
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
          alt=""
          style={{ width: 28, marginLeft: 150 }}
        />
        <a href="https://www.google.co.in/">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png"
            style={{ width: 25, marginLeft: 10 }}
            alt=""
          />
        </a>
        <img
          src="https://cdn-icons-png.flaticon.com/128/733/733585.png"
          style={{ width: 25, marginLeft: 10 }}
        />
        <a href="https://www.instagram.com">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            style={{ width: 25, marginLeft: 10 }}
          />
        </a>

        <img
          src="https://cdn-icons-png.flaticon.com/128/1387/1387991.png"
          alt=""
          style={{ width: 25, marginLeft: 10 }}
        />
      </form>
      <div>
        <Grid container spacing={2}>
          {allEntry.map((elem) => {
            return (
              <div>
                <Grid item xs={12}>
                  <Card className="map">
                    <CardContent>
                      <h3>{elem.email}</h3>
                      <h3>{elem.password}</h3>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handledelete(elem)}
                      >
                        Delet
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </div>
            );
          })}
        </Grid>
      </div>
      <ToastContainer />
    </>
  );
};
