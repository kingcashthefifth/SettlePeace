import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Test extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return <TextField id="standard-name" label="Name" onChange={this.handleChange} margin="normal" />;
  }
}

export default Test;
