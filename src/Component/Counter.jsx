import React, { useState } from "react";
import { Button, Grid, Card, CardContent } from "@mui/material";

export const Counter = () => {
  const [count, setCount] = useState(0);
  if (count > 10) {
    setCount(0);
  }
  if (count < -10) {
    setCount(0);
  }


  return (
    <div className="counter">
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button variant="contained" onClick={() => setCount(count + 1)}>
                Increment
              </Button>
              <h1> Counter : {count}</h1>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="error"
                onClick={() => setCount(count - 1)}
              >
                Dicrement
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
