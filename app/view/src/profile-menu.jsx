const React = require("react");
const {
    Menu,
    MenuItem
} = require("@material-ui/core");

module.exports = (props, context) => (
    <Menu anchorEl={props.anchorEl} open={Boolean(props.anchorEl)} onClose={props.onClose}>
      <MenuItem onClick={props.onProfile}>Profile</MenuItem>
      <MenuItem onClick={props.onLogout}>Log Out</MenuItem>
    </Menu>
);
