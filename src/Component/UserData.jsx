import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, TextField, CardContent } from "@mui/material";

export const UserData = () => {
  const [data, setData] = useState([]);
  const [dataa, setDataa] = useState([]);
  const [copy, setCopy] = useState("");

  const getdata = async () => {
    const result = await axios.get("https://reqres.in/api/users/");
    setData(result.data.data);
    setDataa(result.data.data);
    console.log(result.data?.data);
  };
  useEffect(() => {
    const fill = data.filter(
      (item) =>
        item.id == copy ||
        item.first_name.toUpperCase().includes(copy.toUpperCase()) ||
        item.last_name.toUpperCase().includes(copy.toUpperCase()) ||
        item.email.toUpperCase().includes(copy.toUpperCase())
    );
    setDataa([...fill]);
  }, [copy]);

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="back">
      <Grid container spacing={4} className="text">
        <Grid item xs={2}>
          <TextField
            variant="outlined"
            label="Seach here......"
            onChange={(e) => setCopy(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={1}>
          <b>Search Bar</b>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {dataa.map((item) => {
          return (
            <Grid item xs={2}>
              <Card className="user">
                <CardContent>
                  <h4>{item.id}</h4>
                  <img src={item.avatar} alt="" />
                  <h3>{item.first_name}</h3>
                  <h4>{item.last_name}</h4>
                  <h5>{item.email}</h5>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
