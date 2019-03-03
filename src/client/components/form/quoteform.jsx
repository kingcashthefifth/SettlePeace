import React from 'react';
import Formrow from './formrow';
import Lines from './lines';
// import PropTypes from 'prop-types';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import {withStyles} from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

class Quoteform extends React.Component {
  constructor() {
    super();
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
      linecounter: 2
      // linecount: [<Lines />, <Lines />, <Lines />]
    };
    this.handleChange = this.handleChange.bind(this);
    this.addLine = this.addLine.bind(this);
    this.delLines = this.delLines.bind(this);
  }

  handleChange(event, rowId) {
    if (rowId) {
      let tempObj = {};
    }
    // console.log('event.target.id: ', [event.target.id]);
    // console.log('event.target.value: ', event.target.value);
    // this.setState({ [event.target.id]: event.target.value });
    console.log('event.target.id: ', [event.target.name]);
    console.log('event.target.value: ', event.target.value);
    console.log('onChange activated!!!');
    this.setState({[event.target.name]: event.target.value});
  }

  printPDF(event) {
    event.preventDefault();
    window.print();
  }

  addLine(event) {
    event.preventDefault();
    console.log('addline function activated');
    console.log('current linecounter: ', this.state.linecounter);
    let count = this.state.linecounter + 1;
    this.setState({linecount: [...this.state.linecount, count]});
  }

  delLines(id) {
    // let selectLine = document.querySelector(`#row${id}`);
    // console.log('selectLine: ', selectLine);
    // selectLine.parentNode.removeChild(selectLine);
    // document.querySelector(`#row${id}`).parentNode.removeChild(document.querySelector(`#row${id}`));
    console.log('id: ', id);
    let arr = [...this.state.linecount];
    arr.splice(arr.indexOf(id), 1);
    this.setState({linecount: arr});
  }

  // componentDidUpdate() {
  //   formlines = this.state.linecount.map((obj, index) => {
  //     return <Lines key={index} />;
  //   });
  // }

  render() {
    let logoURL;
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
    // const {classes} = this.props;
    // const cellLook = {padding: '0', margin: '0', width: '100%', height: '100%'};
    // const cellAdjust = {margin: '0', padding: '0'};
    // const tableCell = {display: 'table-cell'};

    let formlines;
    if (this.props.doclines) {
      formlines = this.props.doclines.map((obj, index) => {
        // this.setState({newlines: [...this.state.newlines, {}]});
        return (
          <Lines
            key={index}
            id={index}
            part_no={obj.part_no}
            description={obj.description}
            quantity={obj.quantity}
            price={obj.price}
            handleChange={this.props.handleChange}
          />
        );
      });
    } else if (this.state.newlines.length > 0) {
      formlines = this.state.newlines.map((obj, index) => {
        // this.setState({newlines: [...this.state.newlines, {}]});
        return (
          <Lines
            key={index}
            id={index}
            part_no={obj.part_no}
            description={obj.description}
            quantity={obj.quantity}
            price={obj.price}
            handleChange={this.props.handleChange}
          />
        );
      });
    } else {
      // this.setState({newlines: [{}, {}, {}]});
      formlines = this.state.linecount.map((obj, index) => {
        return (
          <React.Fragment>
            <Lines />
          </React.Fragment>
        );
      });
    }
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
                        <span className="text-muted">GST Registration:</span>
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
                        <tbody>
                          {this.state.linecount.map((obj, index) => {
                            console.log('this is obj: ', obj);
                            return <Lines key={obj} id={obj} delLines={this.delLines} />;
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="d-flex flex-row-reverse bg-dark text-white p-4 specialPrint">
                    <div className="py-3 px-5 text-right">
                      <div className="mb-2">Grand Total</div>
                      <div className="h2 font-weight-light" contentEditable suppressContentEditableWarning>
                        $234,234
                      </div>
                    </div>

                    <div className="py-3 px-5 text-right">
                      <div className="mb-2">Discount</div>
                      <div className="h2 font-weight-light" contentEditable suppressContentEditableWarning>
                        10%
                      </div>
                    </div>

                    <div className="py-3 px-5 text-right">
                      <div className="mb-2">Sub - Total amount</div>
                      <div className="h2 font-weight-light">
                        $
                        <span contentEditable suppressContentEditableWarning>
                          32,432
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-3 px-5 py-3 text-right hidePrint" style={{backgroundColor: 'lightgrey'}}>
            <button onClick={this.addLine} className="btn btn-light mr-3" style={{color: 'black'}}>
              Add Row
            </button>
            <button type="submit" className="btn btn-light mr-3" style={{color: 'black'}}>
              Create quote
            </button>
            <button className="btn btn-success" onClick={this.printPDF}>
              PDF
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Quoteform;
// export default withStyles(styles)(Quoteform);
