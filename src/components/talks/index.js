import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import talk1 from '../../assets/talk1.svg';
import talk2 from '../../assets/talk2.svg';
import talk3 from '../../assets/talk3.svg';
import './Talks.css';

const styles = (theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 'inherit',
  }
});

class Talks extends Component {

  render() {
    const { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    
    return (
      <Container maxWidth="lg" className={classes.container}>
        <h3 className="talkHeader">
          <div className="talkTitle">
            <span role="img" aria-label="speaker">🔊</span>
            <span>{" Talks"}</span>
          </div>
        </h3>
        <Grid container spacing={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <img src={talk1} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <img src={talk2} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <img src={talk3} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

Talks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Talks);

