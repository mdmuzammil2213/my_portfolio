import React, { useState } from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const Animalpic = () => {
  const [animal, setAnimal] = useState("Tiger");
  return (
    <div>
      <u>
        <h1>Animal Gallary</h1>
      </u>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <CardContent>{animal}</CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <img
                src={`Images/${animal}.jpg`}
                // className="img"
                width={250}
                height={200}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("Cat")}
            variant="contained"
            fullWidth
            color="secondary"
          >
            Cat
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("Cheetah")}
            variant="contained"
            fullWidth
            color="secondary"
          >
            Cheetah
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("Cub")}
            variant="contained"
            fullWidth
            color="secondary"
          >
            Cub
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("Tiger")}
            variant="contained"
            fullWidth
            color="primary"
          >
            Tiger
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("Zebra")}
            variant="contained"
            fullWidth
            color="primary"
          >
            Zebra
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("ELEPHANT")}
            variant="contained"
            fullWidth
            color="primary"
          >
            Elephant
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("Monkey")}
            variant="contained"
            fullWidth
            color="success"
          >
            Monkey
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("Dog")}
            variant="contained"
            fullWidth
            color="success"
          >
            Dog
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("parrot")}
            variant="contained"
            fullWidth
            color="success"
          >
            Parrot
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("Angel")}
            variant="contained"
            fullWidth
            color="warning"
          >
            Angel
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("Fish")}
            variant="contained"
            fullWidth
            color="warning"
          >
            Fish
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setAnimal("Rabbit")}
            variant="contained"
            fullWidth
            color="warning"
          >
            Rabbit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
