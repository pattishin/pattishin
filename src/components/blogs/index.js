import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import './Blogs.css';
import styles from './styles';

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.selectFolder = this.selectFolder.bind(this);
  }

  selectFolder(slug) {
    window.open(`https://github.com/pattishin/${slug}`, '_blank');
  }

  render() {
    const { classes } = this.props;
    
    return (
      <Container maxWidth="lg" className={classes.container}>
        <h3 className="blogHeader">
          <div className="blogTitle">
            <span role="img" aria-label="pen">🖋️</span>
            <span>{" Blog"}</span>
          </div>
        </h3>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} onClick={() => this.selectFolder('')}>
            <div className="blogFolder">
              <NewspaperIcon style={{ color: 'rgb(100, 255, 218)' }} />
              <h4>{"Journey to Cloud City"}</h4>
              <p>{"Google Cloud Platform story series of the adventures of Cloud Traveler and Cloud Train Conductor to Cloud City."}</p>
            </div>
          </Grid>
      </Container>
    );
  }
}

Blogs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blogs);
