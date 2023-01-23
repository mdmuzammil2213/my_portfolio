import React from "react";
import { Link } from "react-router-dom";
import { CardContent, Card, Grid } from "@mui/material";

export const Navbar = () => {
  return (
    <div className="nav">
      <b>
        <i>
          {" "}
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Card style={{ borderRadius: 50 }}>
                <CardContent>
                  <Link to="./Counter" style={{ textDecoration: "none" }}>
                    Counter
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card style={{ borderRadius: 50 }}>
                <CardContent>
                  <Link to="./Todolist" style={{ textDecoration: "none" }}>
                    Todolist
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card style={{ borderRadius: 50 }}>
                <CardContent>
                  <Link to="./API" style={{ textDecoration: "none" }}>
                    APIData
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card style={{ borderRadius: 50 }}>
                <CardContent>
                  <Link to="./Idman" style={{ textDecoration: "none" }}>
                    Idman
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card style={{ borderRadius: 50 }}>
                <CardContent>
                  <Link to="./Tabales" style={{ textDecoration: "none" }}>
                    Tabales
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card style={{ borderRadius: 50 }}>
                <CardContent>
                  <Link to="./Login" style={{ textDecoration: "none" }}>
                    Login Page
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card style={{ borderRadius: 50 }}>
                <CardContent>
                  <Link to="./Eshop" style={{ textDecoration: "none" }}>
                    E-shop
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card style={{ borderRadius: 50 }}>
                <CardContent>
                  <Link to="./Animalpic" style={{ textDecoration: "none" }}>
                    Animal Tabale
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card style={{ borderRadius: 50 }}>
                <CardContent>
                  <Link to="./Animal" style={{ textDecoration: "none" }}>
                    Animal
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card style={{ borderRadius: 50 }}>
                <CardContent>
                  <Link to="./Chat" style={{ textDecoration: "none" }}>
                    Whatsapp
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card style={{ borderRadius: 50 }}>
                <CardContent>
                  <Link to="./FormLog" style={{ textDecoration: "none" }}>
                    Form
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card style={{ borderRadius: 50 }}>
                <CardContent>
                  <Link to="./FunctionLog" style={{ textDecoration: "none" }}>
                    Page Log
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card style={{ borderRadius: 50 }}>
                <CardContent>
                  <Link to="./UserData" style={{ textDecoration: "none" }}>
                    Featching Data
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Card style={{ borderRadius: 50 }}>
                <CardContent>
                  <Link to="./ProjectApi" style={{ textDecoration: "none" }}>
                    Api Data
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </i>
      </b>
    </div>
  );
};
