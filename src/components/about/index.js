import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import './About.css';

function About() {
  return (
    <Container className="aboutContainer">

      {/* ── Game stage label ── */}
      <div className="stageLabel">
        <span className="stageBadge">STAGE 00</span>
        <span className="stageName">HOME BASE</span>
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

      {/* ── Attributes ── */}
      <Grid2 container className="aboutAuthor">
        <Grid2 size={{ xs: 12, lg: 6 }} className="aboutDetails">
          <div className="questLogLabel">◈ ATTRIBUTES</div>
          <div className="attrItem">
            <span className="attrIcon">💻</span>
            <span>Software Engineer</span>
          </div>
          <div className="attrItem">
            <span className="attrIcon">👷</span>
            <span>Community builder</span>
          </div>
          <div className="attrItem">
            <span className="attrIcon">☕</span>
            <span>Fluent in all things coffee</span>
          </div>
          <div className="attrItem">
            <span className="attrIcon">🙏</span>
            <span>#hopeistheanthem</span>
          </div>
        </Grid2>
      </Grid2>

    </Container>
  );
}

export default About;
