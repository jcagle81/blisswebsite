import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(),
  },
  root: {
    flexGrow: 1,
  },
  typography: {
    flexGrow: 1,
        textAlign: "center"
      }
}));