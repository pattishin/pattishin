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

        {/* ── Game stage label ── */}
        <div className="stageLabel">
          <span className="stageBadge">STAGE 00</span>
          <span className="stageName">HOME BASE</span>
          <div className="stageStars">★★★★★</div>
        </div>

        {/* ── Hero profile header ── */}
        <div className="heroProfileHeader">
          <span className="playerTag">PLAYER 1</span>
          <h1 className="aboutTitle">Patti Shin</h1>
          <span className="heroClass">CLASS: ENGINEER + COMMUNITY BUILDER</span>
        </div>

        {/* ── HP / XP bars ── */}
        <div className="heroStats">
          <div className="statRow">
            <span className="statLabel">HP</span>
            <div className="statBarTrack">
              <div className="statBarFill hp" style={{ width: '100%' }} />
            </div>
            <span className="statVal">999/999</span>
          </div>
          <div className="statRow">
            <span className="statLabel">XP</span>
            <div className="statBarTrack">
              <div className="statBarFill xp" style={{ width: '82%' }} />
            </div>
            <span className="statVal">SENIOR LVL</span>
          </div>
        </div>

        {/* ── Bio + attributes ── */}
        <Grid2 container className="aboutAuthor">
          <Grid2 size={{ xs: 12, lg: 6 }} className="aboutSummary">
            <div className="questLogLabel">◈ QUEST LOG</div>
            {mainAuthor && mainAuthor.description}
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 6 }} className="aboutDetails">
            <div className="questLogLabel">◈ ATTRIBUTES</div>
            <p>
              <span className="attrIcon">💻</span>
              <span>Software Engineer</span>
            </p>
            <p>
              <span className="attrIcon">👷</span>
              <span>Community builder</span>
            </p>
            <p>
              <span className="attrIcon">☕</span>
              <span>Fluent in all things coffee</span>
            </p>
            <p>
              <span className="attrIcon">🙏</span>
              <span>#hopeistheanthem</span>
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
