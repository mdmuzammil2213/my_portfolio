import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid } from "@mui/material";

export const Eshop = () => {
  const [data, setData] = useState([]);
  const [filData, setFilData] = useState([]);
  const [catData, setCatData] = useState([]);
  const [txtSearch, setTxtSerach] = useState("");
  const [txtCat, setTxtcate] = useState("");

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    console.log(result.data);
  };

  const getCategory = () => {
    const result = axios("https://fakestoreapi.com/products/categories");
    setCatData(result, data);
  };

  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        item.title.toUpperCase().inculeds(txtSearch.toUpperCase()) ||
        item.description.toUpperCase().inculeds(txtSearch.toUpperCase()) ||
        item.category.toUpperCase().inculeds(txtSearch.toUpperCase())
    );
    setFilData([...filtered]);
  }, [txtSearch]);

  useEffect(() => {
    const filtered = data.filter(
      (item) => item.category.toUpperCase() === txtCat.toUpperCase()
    );
    setFilData([...filtered]);
  }, [txtCat]);

  useEffect(() => {
    getData();
    getCategory();
  }, []);

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <input
            type="text"
            placeholder="serach"
            onChange={(e) => txtSearch(e.target.value)}
          />
        </Grid>
      </Grid>
      <u>
        <b>
          <h1>Online Shopping App</h1>
        </b>
      </u>
      <Grid container spacing={2}>
        {data.map((item) => {
          return (
            <Grid item xs={3}>
              <Card className="set">
                <CardContent>
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: 300, height: 300 }}
                  />
                  <h3>{item.title}</h3>
                  <i>
                    <h3>{item.category}</h3>
                  </i>
                  <h1>$ {item.price}</h1>
                  <p>{item.description.substring(0, 50)}...</p>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
