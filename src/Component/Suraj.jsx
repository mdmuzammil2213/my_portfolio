import React, { useState } from "react";
import { TextField, Button, Grid, SnackbarContent } from "@mui/material";

export const Suraj = ({
  txtchand,
  setTxtSuraj,
  txtSuraj,
  setIsSurajTyping,
}) => {
  const [txt, setTxt] = useState([]);

  const handledelet = (item) => {
    const result = txt.filter((ind) => ind !== item); 
    setTxt(result);
  };
  return (
    <div className="chatitem">
      <h4>Suraj</h4>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField
            value={txt}
            variant="outlined"
            label="Type Here"
            className="chattext"
            onChange={(e) => setTxt(e.target.value)}
            onFocus={() => setIsSurajTyping(true)}
            onBlur={() => setIsSurajTyping(false)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={() => {
              setTxtSuraj([txt, ...txtSuraj]);
              setTxt("");
            }}
          >
            Send
          </Button>
        </Grid>
        {txtchand.map((item) => (
          <Grid item xs={12}>
            <SnackbarContent message={item} />
            <Button
              variant="contained"
              color="error"
              value={txt}
              onClick={() => handledelet(item)}
            >
              Delet
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
