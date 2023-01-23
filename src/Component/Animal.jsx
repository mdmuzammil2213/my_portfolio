import React, { useState } from "react";
import { Grid, Card, Button, CardContent } from "@mui/material";

export const Animal = () => {
  const [animal, setAnimal] = useState("Monkey");

  return (
    <div className="ssub">
      <i>
        <h1>Animal Home</h1>
      </i>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>{animal}</CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={() => setAnimal("cat")}
            fullWidth
            color="warning"
          >
            Cat
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={() => setAnimal("tiger")}
            fullWidth
            color="warning"
          >
            Tiger
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={() => setAnimal("zebra")}
            fullWidth
            color="warning"
          >
            Zebra
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={() => setAnimal("GOAT")}
            fullWidth
            color="error"
          >
            Goat
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={() => setAnimal("cub")}
            fullWidth
            color="error"
          >
            Cub
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={() => setAnimal("ELEPHANT")}
            fullWidth
            color="error"
          >
            Elephant
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={() => setAnimal("cheetah")}
            fullWidth
            color="error"
          >
            Cheetah
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
