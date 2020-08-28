const styles = (theme) => ({
  root: {
    display: 'flex',
    fontFamily: "Roboto Mono",
    height: "inherit"
  },
  title: {
    fontFamily: "Roboto Mono"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: "#3e3e3e"
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
});

export default styles;

