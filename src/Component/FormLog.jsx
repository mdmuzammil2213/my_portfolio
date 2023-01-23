import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

export const FormLog = () => {
  const [data, setData] = useState([]);
  const [txt, setTxt] = useState("");
  const [text, setText] = useState("");

  const handleClear = () => {
    setText("");
    setTxt("");
  };

  const handledelet = (item) => {
    const result = data.filter((elem) => elem != item);
    setData(result);
  };
  return (
    <div>
      <h1>Form Login</h1>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          Username :
        </Grid>
        <Grid item={3}>
          <TextField
            variant="outlined"
            label="Username"
            value={txt}
            fullWidth
            onChange={(e) => setTxt(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          Password :
        </Grid>
        <Grid item></Grid>
        <Grid item xs={3}>
          <TextField
            variant="outlined"
            label="Add password"
            value={text}
            fullWidth
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={() => setData([...data, txt + " " + text])}
         style={{margin:10}} >
            Submit
          </Button>
          <Button variant="contained" color="error" onClick={handleClear}>
            Clear
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        {data.map((item) => (
          <div>
            <h1>{item}</h1>
            <Button
              variant="contained"
              color="error"
              onClick={() => handledelet(item)}
            >
              Delet
            </Button>
          </div>
        ))}
      </Grid>
    </div>
  );
};
