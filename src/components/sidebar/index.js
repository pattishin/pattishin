import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import avatar from '../../assets/pattishin.jpg';
import './Sidebar.css';
import styles from './styles';

class Sidebar extends Component {
  render() {
    const { classes, open, setOpen } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={() => setOpen(false) }>
            <ChevronLeftIcon style={{ color: 'rgb(100, 255, 218)' }} />
          </IconButton>
        </div>
        <div className="authorCard">
          <div className="authorCardTop">
            <div className="authorAvatarWrapper">
              <img src={avatar} className="avatar" alt="avatar" />
            </div>
          </div>
          <div className="authorCardBody">
            <div className="authorSocialMedia">
              <a href="https://github.com/pattishin" target="_blank" rel="noopener noreferrer">
                <IconButton className="menuButton">
                  <GitHubIcon style={{ color: 'rgb(100, 255, 218)' }} />
                </IconButton>
              </a>
              <a href="https://twitter.com/pattishin" target="_blank" rel="noopener noreferrer">
                <IconButton className="menuButton">
                  <TwitterIcon style={{ color: 'rgb(100, 255, 218)' }} />
                </IconButton>
              </a>
              <a href="https://www.linkedin.com/in/pattishin" target="_blank" rel="noopener noreferrer">
                <IconButton className="menuButton">
                  <LinkedInIcon style={{ color: 'rgb(100, 255, 218)' }} />
                </IconButton>
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    );
  }
}

Sidebar.defaultProps = {
  open: true,
  setOpen: () => {}
}

Sidebar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);


