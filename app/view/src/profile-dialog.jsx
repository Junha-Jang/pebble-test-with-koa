const React = require("react");
const axios = require("axios");
const {
    Avatar,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
    Button,
    withStyles
} = require("@material-ui/core");

const { default: AccountCircle } = require("@material-ui/icons/accountcircle");

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
        <DialogTitle>Profile</DialogTitle>
        <DialogContent className = {props.classes.container}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AccountCircle />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>
                {props.data.name}
              </ListItemText>
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={props.onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
));
