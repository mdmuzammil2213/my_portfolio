import React, { useState } from "react";
import { Button, TextField, Card, CardContent, Grid } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Idman = () => {
  const [txt, setTxt] = useState("");
  const [txt1, setTxt1] = useState("");
  const [txt2, setTxt2] = useState("");
  const [list, setList] = useState([]);

  
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            variant="standard"
            label="Fisrt Name"
            onChange={(e) => setTxt(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            variant="standard"
            label="Middle Name"
            onChange={(e) => setTxt1(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            variant="standard"
            label="Last Name"
            onChange={(e) => setTxt2(e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            onClick={() => setList([...list, txt + " " + txt1 + " " + txt2])}
          >
            Add
          </Button>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>

      <Grid container>
        {list.map((item) => (
          <div className="card">
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <h1> ID Card</h1>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9cnEvZ98kadKb7ZIhW20sXOTNVlEsH1q4Q&usqp=CAU"
                    alt=""
                  />
                  <h3>{item}</h3>
                </CardContent>
              </Card>
            </Grid>
          </div>
        ))}
      </Grid>
      <ToastContainer />
    </div>
  );
};
