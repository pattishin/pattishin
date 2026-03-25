const styles = (theme) => ({
  root: {
    display: 'flex',
    fontFamily: "'Raleway', sans-serif",
    height: "inherit"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: 'transparent',
  },
});

export default styles;
