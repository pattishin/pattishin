import { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import './About.css';

class About extends Component {
  render() {
    const { authors } = this.props;
    const mainAuthor = authors && authors[0];

    return (
      <Container className="aboutContainer">
        <h1 className="aboutTitle">Patti Shin</h1>
        <Grid2 container className="aboutAuthor">
          <Grid2 size={{ xs: 12, lg: 6 }} className="aboutSummary">
            {mainAuthor && mainAuthor.description}
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 6 }} className="aboutDetails">
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
          </Grid2>
        </Grid2>
      </Container>
    );
  }
}

About.propTypes = {
  authors: PropTypes.array
};

export default About;
