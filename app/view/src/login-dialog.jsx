const React = require("react");
const {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    withStyles
} = require("@material-ui/core");

const styles = {
    container: {
        display: "flex",
        flexDirection: "column"
    },
    textField: {
        width: 400
    }
};

module.exports = withStyles(styles)((props, context) => (
    <div>
      <Dialog open={props.open} onClose={props.onClose}>
        <form>
          <DialogTitle>Login</DialogTitle>
          <DialogContent className = {props.classes.container}>
            <TextField className={props.classes.textField} autoFocus type="email" margin="normal" placeholder="Email" onChange={props.onEmailChange} />
            <TextField className={props.classes.textField} type="password" margin="normal" placeholder="Password" onChange={props.onPasswordChange} />
          </DialogContent>
          <DialogActions>
            <Button onClick={props.onClose}>Cancel</Button>
            <Button color="primary" onClick={props.onLogin}>Login</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
));

