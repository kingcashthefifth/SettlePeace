import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: 'haha'
    };
    this.wordChecker = this.wordChecker.bind(this);
  }

  wordChecker(e) {
    let newWord = e.target.value;
    this.setState({monkey: newWord});
  }

  render() {
    return (
      <div>
        <p>{this.state.monkey}</p>
        <input className={styles.name} onChange={this.wordChecker} />
      </div>
    );
  }
}

export default Form;
