import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import './About.css';

const drawerWidth = 240;
const styles = (theme) => ({
  title: {
    flexGrow: 1,
  },
});

class About extends Component {
  render() {
    const { classes, authors } = this.props;
    const mainAuthor = authors && authors[0];

    return (
      <Container className="aboutContainer">
        <h1 className="aboutTitle">Patti Shin</h1>
        <Grid container className="aboutAuthor">
          <Grid item xs={12} lg={6} className="aboutSummary">
            {mainAuthor && mainAuthor.description}
          </Grid>
          <Grid item xs={12} lg={6} className="aboutDetails">
            <p>
              <span role="img" aria-label="engineer">💻</span>  
              <span>{" Software Engineer"}</span>
            </p>
            <p>
              <span role="img" aria-label="builder">👷</span>  
              <span>{" Community builder"}</span>
            </p>
            <p>
              <span role="img" aria-label="coffee">☕</span>  
              <span>{" Fluent in all things coffee"}</span>
            </p>
            <p>
              <span role="img" aria-label="pray">🙏</span>  
              <span>{" #hopeistheanthem"}</span>
            </p>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
  authors: PropTypes.array
};

export default withStyles(styles)(About);


