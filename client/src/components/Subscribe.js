import React from "react";
import { TextField, Button, CircularProgress } from "@material-ui/core";
const { useState } = React;

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-box">
        <div className="image-holder">
          <img src="https://i.imgur.com/1ONKvtm.jpg" alt="subscribe" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontWeight: "normal" }}>Centexus.</h1>
          <h3 style={{ fontWeight: "normal", textAlign: "center" }}>
            Subscribe to our mailing list
          </h3>
          <TextField
            style={{ margin: "10px 0" }}
            fullWidth
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
          />
          <div className="loader">
            <CircularProgress />
          </div>
          <Button variant="contained" fullWidth color="primary">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
