import React, { useState } from "react";
import { Grid, Card, CardContent, TextField } from "@mui/material";

export const Tabales = () => {
  const [arr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [num, setNum] = useState(2);
  return (
    <React.Fragment>
      <marquee behavior="" direction="">
        <h1>This is Tabales</h1>
      </marquee>
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={6}>
          <label For="Enter Number Here" className="font">
            Enter Number Here :-{" "}
          </label>
          <TextField
            onChange={(e) => setNum(e.target.value)}
            label="Enter Number"
            variant='filled'
          />
        </Grid>
        {arr.map((item) => (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <h1>
                  {num} X {item}= {item * num}
                </h1>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
