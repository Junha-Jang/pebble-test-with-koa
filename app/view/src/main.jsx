const React = require("react");
const axios = require("axios");
require("babel-polyfill");
const {
    withStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
} = require("@material-ui/core");
const { default: MenuIcon } = require("@material-ui/icons/menu");
const { default: AccountCircle } = require("@material-ui/icons/accountcircle");

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};

const LoginToggler = require("./login-toggler.jsx");
const LoginDialog = require("./login-dialog.jsx");
const ProfileMenu = require("./profile-menu.jsx");
const ProfileDialog = require("./profile-dialog.jsx");

let Main = function(props, context) { this.props = props; this.context = context; };

Main.prototype = Object.create(React.Component.prototype);
Main.prototype.state = { loginDialogOpen: false, isLogin: false, profileMenuAnchorEl: null, loginDialogEmail: "", loginDialogPassword: "", profileDialogOpen: false, profileDialogData: { name: "" } };
Main.prototype.handleTogglerChange = name => function(event) { this.setState({ [name]: event.target.checked }); };
Main.prototype.handleMenuClick = name => function(event) { this.setState({ [name]: event.currentTarget }); };
Main.prototype.handleMenuClose = name => function(event) { this.setState({ [name]: null }); };
Main.prototype.handleDialogOpen = name => function(event) { this.setState({ [name]: true }); };
Main.prototype.handleDialogClose = name => function(event) { this.setState({ [name]: false }); };
Main.prototype.handleProfileMenuLogout = function(event) { this.setState({ loginDialogOpen: false, isLogin: false, profileMenuAnchorEl: null }); };
Main.prototype.handleProfileDialogData = async function(event) {
    const response = await axios.get("/api/profile");
    console.log(response);
    this.setState({ profileDialogData: response.data });
};
Main.prototype.handleTextFieldChange = name => function(event) { this.setState({ [name]: event.target.value }); };
Main.prototype.handleLogin = async function(event) { await this.login(this.state.loginDialogEmail, this.state.loginDialogPassword); this.handleDialogClose("loginDialogOpen").bind(this)(); };
Main.prototype.login = async function(email, password) {
    console.log("login" + email + password);
    try {
        const response = await axios.post("/api/login", {
            email: email,
            password: password
        });
        if(response.data.status == "success") {
            this.setState({
                isLogin: true
            });
            console.log("Login succeeded");
            this.handleProfileDialogData();
        }
    } catch(e) {
        if(e.response.status == 401) {
            console.log("Login failed");
        }
    }
};

Main.prototype.render = function() {
    return (
        <div className={this.props.classes.root}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton className={this.props.classes.menuButton} color="inherit">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={this.props.classes.grow}>
                Title
              </Typography>
              <LoginToggler checked={this.state.isLogin} onChange={this.handleTogglerChange("isLogin").bind(this)} />
              {this.state.isLogin ?
               <div>
                 <IconButton color="inherit" onClick={this.handleMenuClick("profileMenuAnchorEl").bind(this)}>
                   <AccountCircle />
                 </IconButton>
                 <ProfileMenu anchorEl={this.state.profileMenuAnchorEl} onClose={this.handleMenuClose("profileMenuAnchorEl").bind(this)} onProfile={this.handleDialogOpen("profileDialogOpen").bind(this)} onLogout={this.handleProfileMenuLogout.bind(this)} />
               </div> :
               <Button color="inherit" onClick={this.handleDialogOpen("loginDialogOpen").bind(this)}>Login</Button>}
            </Toolbar>
          </AppBar>
          <LoginDialog open={this.state.loginDialogOpen} onClose={this.handleDialogClose("loginDialogOpen").bind(this)} onLogin={this.handleLogin.bind(this)} onEmailChange={this.handleTextFieldChange("loginDialogEmail").bind(this)} onPasswordChange={this.handleTextFieldChange("loginDialogPassword").bind(this)} />
          <ProfileDialog open={this.state.profileDialogOpen} onClose={this.handleDialogClose("profileDialogOpen").bind(this)} data={this.state.profileDialogData} />
        </div>
    );
};

module.exports = withStyles(styles)(Main);
