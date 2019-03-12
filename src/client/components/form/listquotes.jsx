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
    this.searchChecker = this.searchChecker.bind(this);
  }

  componentDidMount() {
    fetch('/api/quotelist')
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

  searchChecker(e) {
    let resultLength = 0;
    for (let i = 0; i < this.state.quotetitle.length; i++) {
      document.querySelectorAll('.itemlister')[i].style.display = 'none';
    }
    for (let i = 0; i < this.state.quotetitle.length; i++) {
      if (
        document
          .querySelectorAll('.attentionSearch')
          [i].innerHTML.toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        document
          .querySelectorAll('.quote_refSearch')
          [i].innerHTML.toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        document
          .querySelectorAll('.job_titleSearch')
          [i].innerHTML.toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        resultLength++;
        document.querySelectorAll('.itemlister')[i].style.display = '';
      }
    }
  }

  render() {
    console.log('THIS IS PROPS: ', this.props);
    const quotelist = this.state.quotetitle.map((obj, index) => {
      return (
        <React.Fragment>
          <NavLink
            key={obj.id}
            to={'quote/' + obj.id}
            className="list-group-item list-group-item-action flex-column align-items-start itemlister"
          >
            <div className="row">
              <div className="col-11" style={{borderRight: '1px solid lightgrey'}}>
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1 attentionSearch">To: {obj.customer_attention}</h5>
                  <small className="quote_refSearch">Quote Reference: #{obj.quote_ref}</small>
                </div>
                <div className="d-flex w-100 justify-content-between">
                  <p className="mb-1 job_titleSearch">Job Title: {obj.job_title}</p>
                </div>
                <small>Created on: {obj.created_at}</small>
              </div>
              <div className="col text-center justify-content-center align-items-center h-100">
                <a
                  className="align-middle"
                  href={'#exampleModal' + obj.id}
                  data-toggle="modal"
                  style={{fontSize: '1.1rem'}}
                >
                  {/* &#10005; */}Delete
                </a>
              </div>
            </div>
          </NavLink>
          <div
            className="modal fade"
            id={'exampleModal' + obj.id}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Delete confirmation
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Job title: <br />
                  <strong>{obj.job_title}</strong>
                  <br />
                  <br />
                  Do you wish to delete this quotation?
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Back
                  </button>
                  <a href={'/api/delete/' + obj.id} className="btn btn-primary">
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });
    console.log('this.state.quotelist: ', this.state.quotetitle[0]);
    console.log('quotelist: ', quotelist);
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
                <input
                  className="form-control mr-sm-2 w-25"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={this.searchChecker}
                />
                {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                  Search
                </button> */}
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
