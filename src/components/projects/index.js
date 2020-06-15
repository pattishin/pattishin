import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './Projects.css';

const styles = (theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  fixedHeight: {
    height: 'inherit',
  }
});

class Projects extends Component {

  render() {
    const { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    
    return (
      <Container maxWidth="lg" className={classes.container}>
        <h3 className="projectHeader">
          <div className="projectTitle">
            <span role="img" aria-label="gear">⚙️</span>
            <span>{" Code"}</span>
          </div>
        </h3>
        <Grid container spacing={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <Paper className={fixedHeightPaper}>
                Coming soon
              </Paper>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Paper className={fixedHeightPaper}>
                Coming soon
              </Paper>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Paper className={fixedHeightPaper}>
                Coming soon
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);

