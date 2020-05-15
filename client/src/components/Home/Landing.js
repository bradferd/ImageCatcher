import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { Typography, Button, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  splash: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1516946870798-f970a32afc8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1800&h=500&q=80')",
    marginTop: "-15px",
    padding: "120px",
    color: "rgb(255, 255, 255)",
    borderRadius: "5px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    marginTop: 10,
  },
});

const Landing = (props) => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.splash}>
        <Typography variant="h1">ImageCatcher</Typography>
        <Typography variant="subtitle1">
          All your images, in one place
        </Typography>
        <Button
          component={Link}
          to="/collections/new"
          className="ui huge primary button"
        >
          Get Started
          <i className="right arrow icon" />
        </Button>
      </div>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Grid container style={{ padding: "20px" }}>
            <Typography variant="h3">Who we are</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A vero,
              porro soluta, error ipsa alias quod perferendis ipsam ea odit
              iure? Culpa labore esse ab quia, dolore enim, unde nesciunt
              suscipit consequatur perferendis soluta, sequi rerum ut eius
              voluptate amet provident reiciendis vel corrupti id illo
              consequuntur minus. Commodi, asperiores!
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="placeholder"
            className={classes.image}
          />
        </Grid>
      </Grid>
      <hr />
      <Grid container direction="row" alignItems="center">
        <Grid item xs={12} sm={6}>
          <img
            src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            className={classes.image}
            alt="placeholder"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container style={{ padding: '20px'}}>
            <Typography variant="h3">What we do</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              asperiores ea totam magnam voluptatum, placeat aliquam
              accusantium, debitis dolorum reiciendis laboriosam illum. Ipsum,
              nobis ut est quos distinctio commodi ullam unde deserunt nulla
              veritatis laudantium ipsa quod beatae. Qui pariatur quod minus eum
              eveniet quisquam. Error assumenda nemo quasi laboriosam!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Landing;
