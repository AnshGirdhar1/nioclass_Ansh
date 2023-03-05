import { Grid } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header">
        <Grid container className="header-inner">
          <Grid item>
            <img
              src="https://www.nioclass.com/static/media/nioclass.efdaf55818f7b373b89e.png"
              alt="nioclass-logo"
              className="logo"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Header;
