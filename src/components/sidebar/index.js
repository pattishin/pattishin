import clsx from 'clsx';
import { withStyles } from '../../utils/withStyles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SvgIcon from '@mui/material/SvgIcon';
import avatar from '../../assets/pattishin.jpg';
import './Sidebar.css';
import styles from './styles';

function MastodonIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.886 4.843.061 6.802-1.615.11-.097.233-.191.372-.286.1-.067.203-.133.302-.2.198-.131.395-.26.596-.388.196-.126.394-.25.595-.37.11-.066.22-.13.332-.192 2.126-1.182 3.75-3.218 4.204-5.61.064-.34.115-.683.154-1.027.14-1.21.2-2.43.155-3.645a23.4 23.4 0 0 0-.054-1.028zm-3.595 9.477c-.274 2.078-2.277 3.81-4.342 4.24-1.168.244-2.37.204-3.552.065-1.35-.158-2.67-.477-3.93-.944-.05-.018-.1-.04-.145-.066a.544.544 0 0 1-.24-.48 12.43 12.43 0 0 1 .18-2.073c.047-.296.102-.59.165-.883l.028-.127.124.04c.948.308 1.92.504 2.901.6 1.098.107 2.204.118 3.305.04 1.48-.105 3.026-.472 4.04-1.6.36-.399.585-.906.644-1.443a9.518 9.518 0 0 0 .055-1.033V9.7c0-.023 0-.046-.002-.069-.01-.494-.037-1.285-.07-2.099-.04-.981-.086-1.93-.115-2.544a3.278 3.278 0 0 0-2.76-3.07c-1.583-.24-3.185-.27-4.778-.099-1.34.144-2.662.45-3.95.908-.09.032-.18.066-.27.1l-.105.04.003.11c.013.407.023.814.026 1.22.003.404.004.808.004 1.21 0 .017 0 .034.002.051.012.376.048.749.107 1.118.21 1.303.857 2.453 1.94 3.17 1.054.7 2.318.963 3.57.91 1.084-.044 2.158-.29 3.132-.72l.11-.049.02.12c.042.255.085.51.128.764.075.443.147.887.208 1.333.098.72.07 1.452-.082 2.163zM11.936 4.9c-.74 0-1.476.084-2.196.251-1.336.314-2.43 1.13-2.896 2.396-.196.534-.28 1.1-.249 1.665.026.492.16.97.39 1.406.59 1.12 1.753 1.8 2.997 1.96.733.094 1.474.077 2.203-.05.95-.165 1.867-.534 2.624-1.124a3.742 3.742 0 0 0 1.343-2.198c.09-.41.12-.832.089-1.25-.072-.98-.516-1.9-1.253-2.556-.785-.698-1.8-1.068-2.842-1.122a7.978 7.978 0 0 0-.21-.003z"/>
    </SvgIcon>
  );
}

function Sidebar({ classes, open = true, setOpen = () => {} }) {
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={() => setOpen(false)} aria-label="Close sidebar">
          <ChevronLeftIcon style={{ color: '#5ab4ac' }} />
        </IconButton>
      </div>
      <div className="authorCard">
        <div className="authorCardTop">
          <div className="authorAvatarWrapper">
            <img src={avatar} className="avatar" alt="Patti Shin's avatar" />
          </div>
        </div>
        <div className="authorCardBody">
          <div className="authorSocialMedia">
            <a href="https://github.com/pattishin" target="_blank" rel="noopener noreferrer">
              <IconButton className="menuButton" aria-label="GitHub">
                <GitHubIcon style={{ color: '#5ab4ac' }} />
              </IconButton>
            </a>
            <a href="https://indieweb.social/@pattishin" rel="me">
              <IconButton className="menuButton" aria-label="Mastodon">
                <MastodonIcon style={{ color: '#5ab4ac' }} />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/pattishin" target="_blank" rel="noopener noreferrer">
              <IconButton className="menuButton" aria-label="LinkedIn">
                <LinkedInIcon style={{ color: '#5ab4ac' }} />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </Drawer>
  );
}

export default withStyles(styles)(Sidebar);
