import React from 'react';
import Formrow from './formrow';
import Lines from './lines';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {request} from 'https';
// import PropTypes from 'prop-types';
// import TextField from '@material-ui/core/TextField';
// import {withStyles} from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

class Quoteform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company_name: '',
      company_addr1: '',
      company_addr2: '',
      company_postal: '',
      company_gst: '',
      company_logo: null,
      customer_com_name: '',
      customer_com_addr1: '',
      customer_com_postal: '',
      customer_attention: '',
      customer_email: '',
      customer_number: '',
      quote_ref: '',
      quote_date: '',
      job_title: '',
      part_no: [],
      description: [],
      quantity: [],
      price: [],
      total_price: [],
      sub_total: 0,
      discount: 0,
      grand_total: 0,
      newlines: ['', '', ''],
      linecount: [0, 1, 2],
      linecounter: 2,
      toggleDiscount: true
      // linecount: [<Lines />, <Lines />, <Lines />]
    };
    this.handleChange = this.handleChange.bind(this);
    this.addLine = this.addLine.bind(this);
    this.delLines = this.delLines.bind(this);
    this.linehandleChange = this.linehandleChange.bind(this);
    this.totalLine = this.totalLine.bind(this);
    this.removeDiscount = this.removeDiscount.bind(this);
    // this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event) {
    // console.log('event.target.id: ', [event.target.id]);
    // console.log('event.target.value: ', event.target.value);
    // this.setState({ [event.target.id]: event.target.value });
    // console.log('event.target.id: ', [event.target.name]);
    // console.log('event.target.value: ', event.target.value);
    // console.log('onChange activated!!!');
    this.setState({[event.target.name]: event.target.value});
  }

  linehandleChange(name, value, row) {
    // console.log('this.state[name][row] before: ', this.state[name][row]);
    this.state[name][row] = value;
    // console.log('this.state[name][row] after: ', this.state[name][row]);
    this.setState({
      [name]: this.state[name]
    });
    // console.log('onChange activated!!!');
    // this.setState({name: value});
  }

  totalLine(value, row) {
    // console.log('this.state.total_price[row] before: ', this.state.total_price[row]);
    this.state.total_price[row] = value;
    // console.log('this.state.total_price[row] after: ', this.state.total_price[row]);
    // console.log('this.state.total_price: ', this.state.total_price);
    this.setState({
      total_price: this.state.total_price
    });
    // console.log('onChange activated!!!');
  }

  printPDF(event) {
    event.preventDefault();
    window.print();
  }

  removeDiscount(event) {
    // console.log('removeDiscount fired!');
    if (event.target.checked) {
      document.querySelector('#subTotalDisplay').classList.remove('hideDiscount');
      document.querySelector('#discountDisplay').classList.remove('hideDiscount');
      // console.log('box checked');
    } else {
      document.querySelector('#subTotalDisplay').classList.add('hideDiscount');
      document.querySelector('#discountDisplay').classList.add('hideDiscount');
      // console.log('box unchecked');
      this.setState({
        discount: 0
      });
    }
  }

  // removeDiscount = (name) => (event) => {
  //   this.setState({[name]: !event.target.checked});
  // };

  addLine(event) {
    event.preventDefault();
    // console.log('addline function activated');
    // console.log('current linecounter: ', this.state.linecounter);
    let count = this.state.linecounter + 1;
    let addTolinecount = [...this.state.linecount, count];
    this.setState({linecount: addTolinecount, linecounter: count});
  }

  delLines(id) {
    // console.log('id: ', id);
    let arr = [...this.state.linecount];
    arr.splice(arr.indexOf(id), 1);
    this.setState({linecount: arr});
  }

  // submitForm(e) {
  //   e.preventDefault();
  //   let data1 = {
  //     company_name: this.state.company_name,
  //     company_addr1: this.state.company_addr1,
  //     company_addr2: this.state.company_addr2,
  //     company_postal: this.state.company_postal,
  //     company_gst: this.state.company_gst,
  //     company_logo: this.state.company_logo,
  //     customer_com_name: this.state.customer_com_name,
  //     customer_com_addr1: this.state.customer_com_addr1,
  //     customer_com_postal: this.state.customer_com_postal,
  //     customer_attention: this.state.customer_attention,
  //     customer_email: this.state.customer_email,
  //     customer_number: this.state.customer_number,
  //     quote_ref: this.state.quote_ref,
  //     quote_date: this.state.quote_date,
  //     job_title: this.state.job_title,
  //     part_no: this.state.part_no,
  //     description: this.state.description,
  //     quantity: this.state.quantity,
  //     price: this.state.price,
  //     discount: this.state.discount,
  //     toggleDiscount: this.state.toggleDiscount
  //   };
  //   console.log('this.state BEF new post: ', data1);
  //   let jsonedData = JSON.stringify(data1);
  //   console.log('this.state BEF data.json(): ', jsonedData);

  //   console.log('this.state.part_no: ', this.state.part_no);

  //   fetch('/quotelist', {
  //     method: 'POST',
  //     body: JSON.stringify(data1),
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     }
  //   });
  //   // axios(
  //   //   {
  //   //     method: 'post',
  //   //     url: '/quotelist',
  //   //     data: {
  //   //       data1
  //   //     },
  //   //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  //   //   }
  //   // '/quotelist',

  //   // jsonedData
  //   // // company_name: this.state.company_name,
  //   // company_addr1: this.state.company_addr1,
  //   // company_addr2: this.state.company_addr2,
  //   // company_postal: this.state.company_postal,
  //   // company_gst: this.state.company_gst,
  //   // company_logo: this.state.company_logo,
  //   // customer_com_name: this.state.customer_com_name,
  //   // customer_com_addr1: this.state.customer_com_addr1,
  //   // customer_com_postal: this.state.customer_com_postal,
  //   // customer_attention: this.state.customer_attention,
  //   // customer_email: this.state.customer_email,
  //   // customer_number: this.state.customer_number,
  //   // quote_ref: this.state.quote_ref,
  //   // quote_date: this.state.quote_date,
  //   // job_title: this.state.job_title,
  //   // part_no: this.state.part_no,
  //   // description: this.state.description,
  //   // quantity: this.state.quantity,
  //   // price: this.state.price,
  //   // discount: this.state.discount,
  //   // toggleDiscount: this.state.toggleDiscount
  //   // {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
  //   // );
  //   //   .then((results) => {
  //   //   console.log('results: ', results);
  //   //   this.props.history.push('/quotes');
  //   // });
  // }

  render() {
    // console.log('QUOTEFORM THIS.PROPS: ', this.props);
    // console.log('QUOTEFORM THIS.PROPS.LOCATION.PATHNAME: ', this.props.location.pathname);
    // console.log('this.state.company_name: ', this.state.company_name);

    let logoURL;
    let createButton;

    if (this.props.loggedin) {
      createButton = (
        <button type="submit" className="btn btn-light mr-3" style={{color: 'black'}}>
          Create quote
        </button>
      );
    }

    if (this.state.company_logo == null) {
      logoURL = (
        <img
          src="https://res.cloudinary.com/cashcloudinary/image/upload/v1551104842/imageedit_3_3603235945.png"
          width="300px"
        />
      );
    } else {
      logoURL = <img src={this.state.company_logo} width="300px" />;
    }
    let formlines;
    let subTotal;
    let grandTotal;
    if (this.state.quantity.length > 0 && this.state.price.length > 0) {
      // let tempArrST = [];
      let tempArrST = this.state.linecount.map((obj) => {
        if (this.state.quantity[obj] !== undefined && this.state.price[obj] !== undefined) {
          return this.state.quantity[obj] * this.state.price[obj];
          // tempArrST.push(tempsub);
        } else {
          return 0;
        }
      });
      // console.log('temrArrST after mapping: ', tempArrST);
      subTotal = `$${tempArrST.reduce(function(a, b) {
        return a + b;
      })}`;
    } else {
      subTotal = `$0`;
    }

    if (subTotal !== `$0`) {
      let testST = subTotal.substr(1);
      grandTotal = `$${parseInt(testST) * ((100 - this.state.discount) / 100)}`;
    } else {
      grandTotal = `$0`;
    }

    // if ((this.props.match.path = '/quote/:id')) {
    //   formlines = this.props.doclines.map((obj, index) => {
    //     // this.setState({newlines: [...this.state.newlines, {}]});
    //     return (
    //       <Lines
    //         key={index}
    //         id={obj}
    //         part_no={obj.part_no}
    //         description={obj.description}
    //         quantity={obj.quantity}
    //         price={obj.price}
    //         linehandleChange={this.linehandleChange}
    //         totalLine={this.totalLine}
    //       />
    //     );
    //   });
    // } else if (this.state.newlines.length > 0) {
    //   formlines = this.state.newlines.map((obj, index) => {
    //     // this.setState({newlines: [...this.state.newlines, {}]});
    //     return (
    //       <Lines
    //         key={index}
    //         id={obj}
    //         part_no={obj.part_no}
    //         description={obj.description}
    //         quantity={obj.quantity}
    //         price={obj.price}
    //         linehandleChange={this.linehandleChange}
    //         totalLine={this.totalLine}
    //       />
    //     );
    //   });
    // } else {
    formlines = this.state.linecount.map((obj, index) => {
      // console.log('this is obj: ', obj);
      return (
        <Lines
          key={obj}
          id={obj}
          part_no={this.state.part_no[obj]}
          description={this.state.description[obj]}
          quantity={this.state.quantity[obj]}
          price={this.state.price[obj]}
          delLines={this.delLines}
          linehandleChange={this.linehandleChange}
          totalLine={this.totalLine}
        />
      );
    });
    // console.log('quoteform this.state.quantity: ', this.state.quantity);
    // }

    return (
      <form action="/quotelist" method="post">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body p-0">
                  <div className="row px-5 pt-5 pb-1">
                    <div className="col-md-6">{logoURL}</div>
                    <div className="col-md-6 text-right">
                      <input
                        name="company_name"
                        className="font-weight-bold mb-1 text-right"
                        value={this.state.company_name}
                        placeholder="Above Minimal Tech Pte. Ltd."
                        style={{width: '100%', border: '0'}}
                        onChange={this.handleChange}
                      />
                      <input
                        name="company_addr1"
                        className="mb-1 text-right"
                        value={this.state.company_addr1}
                        placeholder="Midview City"
                        style={{width: '100%', border: '0'}}
                        onChange={this.handleChange}
                      />
                      <input
                        name="company_addr2"
                        className="mb-1 text-right"
                        value={this.state.company_addr2}
                        placeholder="Blk 28 Sin Ming Lane #03-135"
                        style={{width: '100%', border: '0'}}
                        onChange={this.handleChange}
                      />
                      <input
                        name="company_postal"
                        className="mb-1 text-right"
                        value={this.state.company_postal}
                        placeholder="Singapore, 573974"
                        style={{width: '100%', border: '0'}}
                        onChange={this.handleChange}
                      />
                      <div className="d-inline mb-1">
                        <span>GST Registration:</span>
                        <input
                          name="company_gst"
                          className="text-right"
                          value={this.state.company_gst}
                          placeholder="M2-1025364-K"
                          style={{width: '120px', border: '0'}}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="my-5" />

                  <div className="row pb-5 px-5">
                    <div className="col-md-6">
                      <input
                        name="customer_com_name"
                        className="font-weight-bold mb-4 h4"
                        value={this.state.customer_com_name}
                        placeholder="Wild Tree Camp Tools Pte. Ltd."
                        style={{width: '100%', border: '0'}}
                        onChange={this.handleChange}
                      />

                      <input
                        name="customer_com_addr1"
                        className="mb-1"
                        value={this.state.customer_com_addr1}
                        placeholder="51 Waterloo St, #01-01"
                        style={{width: '100%', border: '0'}}
                        onChange={this.handleChange}
                      />

                      <input
                        name="customer_com_postal"
                        className="mb-1"
                        value={this.state.customer_com_postal}
                        placeholder="Singapore, 187969"
                        style={{width: '100%', border: '0'}}
                        onChange={this.handleChange}
                      />

                      <div className="mb-1 d-inline-block" style={{width: '100%'}}>
                        <strong>Attention : </strong>
                        <input
                          name="customer_attention"
                          value={this.state.customer_attention}
                          placeholder="Mr. Phua Liang Jun"
                          style={{width: '75%', border: '0'}}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="mb-1 d-inline-block" style={{width: '100%'}}>
                        <strong>E-mail : </strong>
                        <input
                          name="customer_email"
                          value={this.state.customer_email}
                          placeholder="phualiangjun@gmail.com"
                          style={{width: '250px', border: '0'}}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="mb-1 d-inline-block" style={{width: '100%'}}>
                        <strong>Tel : </strong>
                        <input
                          name="customer_number"
                          value={this.state.customer_number}
                          placeholder="+65 8888 1688"
                          style={{width: '200px', border: '0'}}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-md-6 text-right">
                      <div className="font-weight-bold mb-2">
                        Quote Reference: #
                        <input
                          name="quote_ref"
                          value={this.state.quote_ref}
                          placeholder="001"
                          style={{width: '30px', border: '0', fontWeight: 'bold'}}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="mb-1">
                        <span className="mb-1">Date: </span>{' '}
                        <input
                          name="quote_date"
                          className="text-right"
                          value={this.state.quote_date}
                          placeholder="4 Mar, 2019"
                          style={{width: '90px', border: '0'}}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row px-5">
                    <div className="col">
                      <h5 className="mb-2">
                        <strong>Job title :</strong>
                      </h5>
                      <input
                        name="job_title"
                        className="mb-1 text-center"
                        value={this.state.job_title}
                        placeholder="Supply of Software Development Consultancy Services"
                        style={{width: '100%', border: '0'}}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="row p-5">
                    <div className="col-md-12">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="border-0 text-uppercase small font-weight-bold">ID</th>
                            <th className="border-0 text-uppercase small font-weight-bold">Description</th>
                            <th className="border-0 text-uppercase small font-weight-bold">Quantity</th>
                            <th className="border-0 text-uppercase small font-weight-bold">Unit Cost</th>
                            <th className="border-0 text-uppercase small font-weight-bold">Total</th>
                          </tr>
                        </thead>
                        <tbody>{formlines}</tbody>
                      </table>
                    </div>
                  </div>

                  <div className="d-flex flex-row-reverse bg-dark text-white py-3 px-5 specialPrint">
                    <div id="grandTotalDisplay" className="py-3 px-5 text-right">
                      <div className="mb-2">Grand Total</div>
                      <div className="h2 font-weight-light">{grandTotal}</div>
                    </div>

                    <div id="discountDisplay" className="py-3 px-5 text-right">
                      <div className="mb-2">Discount</div>
                      <div className="h2 font-weight-light">
                        <input
                          name="discount"
                          className="font-weight-light text-right"
                          value={this.state.discount}
                          placeholder="0"
                          style={{width: '50%', height: '100%', border: '0', background: 'transparent', color: 'white'}}
                          onChange={this.handleChange}
                        />
                        %
                      </div>
                    </div>

                    <div id="subTotalDisplay" className="py-3 px-5 text-right">
                      <div className="mb-2">Sub - Total amount</div>
                      <div className="h2 font-weight-light">{subTotal}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-3 px-5 py-3 text-right hidePrint" style={{backgroundColor: 'lightgrey'}}>
            {/* <button onClick={this.removeDiscount} className="btn btn-light mr-3" style={{color: 'black'}}>
              Remove Discount
            </button> */}
            <label htmlFor="discountButton">
              Toggle Discount&nbsp;
              <input
                className="mr-3"
                name="toggleDiscount"
                type="checkbox"
                defaultChecked={this.state.toggleDiscount}
                // data-toggle="toggle"
                onClick={this.removeDiscount}
              />
            </label>
            <button onClick={this.addLine} className="btn btn-light mr-3" style={{color: 'black'}}>
              Add Row
            </button>
            {createButton}
            <button className="btn btn-success" onClick={this.printPDF}>
              PDF
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(Quoteform);
// export default withStyles(styles)(Quoteform);
