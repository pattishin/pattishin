import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
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
    const { classes } = this.props;

    return (
      <Container className="aboutContainer">
        <div className="aboutAuthor">
          <h1 className="aboutTitle">Patti Shin</h1>
          <h2 className="aboutDetails">
            <span role="img" aria-label="engineer">💻</span>  
            <span>{" Software Engineer"}</span>
          </h2>
          <h2 className="aboutDetails">
            <span role="img" aria-label="builder">👷</span>  
            <span>{" Community builder"}</span>
          </h2>
          <h2 className="aboutDetails">
            <span role="img" aria-label="coffee">☕</span>  
            <span>{" Fluent in all things coffee"}</span>
          </h2>
          <h2 className="aboutDetails">
            <span role="img" aria-label="pray">🙏</span>  
            <span>{" #hopeistheanthem"}</span>
          </h2>
        </div>
      </Container>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);


