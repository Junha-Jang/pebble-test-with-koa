const React = require("react");
const {
    Switch,
    FormControlLabel,
    FormGroup,
} = require("@material-ui/core");

module.exports = (props, context) => (
    <FormGroup>
      <FormControlLabel control={ <Switch checked={props.checked} onChange={props.onChange} /> } />
    </FormGroup>
);
