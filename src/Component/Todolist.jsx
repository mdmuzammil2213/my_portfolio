import React, { useState } from "react";
import { Button, TextField, Card, CardContent, Grid } from "@mui/material";

export const Todolist = () => {
  const [txt, setTxt] = useState("");
  const [list, setList] = useState([]);

  const handledelet = (item) => {
    const result = list.filter((elm) => elm != item);
    setList(result);
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="enter text"
                variant="standard"
                onChange={(e) => setTxt(e.target.value)}
              />
            </Grid>
            <Grid item xs={7}>
              <Button
                variant="contained"
                onClick={() => setList([...list, txt])}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {list.map((item) => (
        <div className="main">
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <h1>{item}</h1>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handledelet(item)}
                  >
                    delet
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};
