import React from 'react';

import styles from './style.scss';
import Axios from 'axios';
import {NavLink} from 'react-router-dom';

class Listquotes extends React.Component {
  constructor() {
    super();
    this.state = {
      quotetitle: []
      // quotetitle: [],
      // quotetitle: []
    };
    this.wordChecker = this.wordChecker.bind(this);
  }

  componentDidMount() {
    fetch('/quotelist')
      .then((results) => {
        console.log('results: ', results);
        return results.json();
      })
      .then((data) => {
        console.log('data: ', data);
        let tempArr = [];
        for (let i = 0; i < data.length; i++) {
          tempArr.push(data[i]);
          // this.setState({quotelist: [...this.state.quotelist, data[i].title]});
          // this.setState({quotelist: [...this.state.quotelist, data[i].title]});
        }
        this.setState({quotetitle: tempArr});
      });
  }

  wordChecker(e) {
    let newWord = e.target.value;
    this.setState({monkey: newWord});
  }

  render() {
    const quotelist = this.state.quotetitle.map((obj, index) => {
      return (
        <NavLink key={index} to="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">To: {obj.attention}</h5>
            <small>{obj.quote_ref}</small>
          </div>
          <p className="mb-1">Job Title: {obj.title}</p>
          <small>Quoted price will show here.</small>
        </NavLink>
      );
    });
    console.log('this.state.quotelist: ', this.state.quotetitle[0]);
    return (
      <div>
        <div className="list-group my-3">
          <span className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1" />
              <small />
            </div>
            <div className="mb-1">
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
            </div>
            <small>Search by Quote Refs, Customer Names, Job Titles.</small>
          </span>

          {quotelist}
        </div>
        {/* <p>{this.state.quotetitle[0]}</p> */}
        {/* <input className={styles.name} onChange={this.wordChecker} /> */}
      </div>
    );
  }
}

export default Listquotes;
