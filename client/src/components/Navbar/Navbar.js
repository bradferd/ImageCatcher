import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Appbar from "@material-ui/core/Appbar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

const Navbar = (props) => {
  return (
    <Appbar position="sticky">
      <Container>
        <Toolbar>
          <Grid container justify="flex-start">
            <Typography component={RouterLink} to="/" color="inherit">
              <i className="camera retro inverted icon" /> ImageCatcher
            </Typography>
          </Grid>
          <Grid container justify="flex-end">
            <Link component={RouterLink} style={{ marginRight: "15px"}} color="inherit" to="/collections/new">
              Start a new Collection
            </Link>
            <Link component={RouterLink} color="inherit" to="/collections">
              All Collections
            </Link>
          </Grid>
        </Toolbar>
      </Container>
    </Appbar>
  );
};

export default Navbar;
