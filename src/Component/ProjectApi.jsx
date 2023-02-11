import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Grid,
  Alert,
} from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProjectApi = () => {
  const [text, setText] = useState("");
  // const [warning, setWarning] = useState("");
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://reqres.in/api/users/");
    console.log(result.data);
    setData(result.data.data);
    setData1([result.data.data]);
  };

  const handelClear = () => {
    toast.info("Data Is Clear Successfull",{position:"bottom-center"},{theme:"dark"})
    setText("");
  };

  useEffect(() => {
    getData();
  }, []);

  const handelSearch = () => {
    if (text == 0 || text > 6) {
      // setWarning(
        // <Alert severity="error">This is a warning alert — check it out!</Alert>
        toast.error("Data Is Not Found Please Check!",{position:"bottom-center"})
      // );
      setData1([]);
    } else {
      setData1(data.filter((item) => item.id == text));
    }
  };
  return (
    <div>
      <h2>API Data</h2>
      <Grid container spacing={4} className="center">
        <Grid item xs={2}>
          <TextField
            variant="outlined"
            value={text}
            label="Serach here......."
            fullWidth
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="success" onClick={handelSearch}>
            Search
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="error" onClick={handelClear}>
            Cleare All
          </Button>
        </Grid>
      </Grid>
      {/* <p>{warning}</p> */}
      {data1.map((item) => {
        const { id, email, first_name, last_name, avatar } = item;
        return (
          <div>
            <Card>
              <CardContent>
                <h3>{id}</h3>
                <h3>{email}</h3>
                <h3>{first_name}</h3>
                <h3>{last_name}</h3>
                <img src={avatar} alt="" />
              </CardContent>
            </Card>
          </div>
        );
      })}
    <ToastContainer />
    </div>
  );
};
