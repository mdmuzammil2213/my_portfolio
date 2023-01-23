import React, { useState, useEffect } from "react";
import { Chand } from "./Chand";
import { Suraj } from "./Suraj";
import { Badge, Grid } from "@mui/material";

export const Chat = () => {
  const [txtchand, setTxtChand] = useState([]);
  const [txtSuraj, setTxtSuraj] = useState([]);
  const [isChandTyping, setIsChandTyping] = useState(true);
  const [isSurajTyping, setIsSurajTyping] = useState([false]);

  useEffect(() => {
    console.log(txtSuraj);
  }, [txtSuraj]);
  return (
    <div className="sub2">
      <u>
        {" "}
        <i>
          <h1>MM Whatsapp</h1>
        </i>
      </u>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Badge
            badgeContent={isChandTyping ? "chand is typing" : 0}
            color="secondary"
          >
            <Suraj
              txtchand={txtchand}
              setTxtSuraj={setTxtSuraj}
              txtSuraj={txtSuraj}
              setIsSurajTyping={setIsSurajTyping}
            />
          </Badge>
        </Grid>
        <Grid item xs={6}>
          <Badge
            badgeContent={isSurajTyping ? "suraj is typing" : 0}
            color="secondary"
          >
            <Chand
              setTxtChand={setTxtChand}
              txtSuraj={txtSuraj}
              txtchand={txtchand}
              setIsChandTyping={setIsChandTyping}
            />
          </Badge>
        </Grid>
      </Grid>
    </div>
  );
};
