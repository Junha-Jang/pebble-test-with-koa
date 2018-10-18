const React = require("react");
const ReactDOM = require("react-dom");
const { CssBaseline } = require("@material-ui/core");

const Main = require("./main.jsx");

module.exports = (props) => (
    <React.Fragment>
      <CssBaseline />
      <Main />
    </React.Fragment>
);

