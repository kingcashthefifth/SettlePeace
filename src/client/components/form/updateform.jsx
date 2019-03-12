import React from 'react';
import Lines from './lines';
import {withRouter} from 'react-router-dom';

class Updateform extends React.Component {
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
    };
    this.handleChange = this.handleChange.bind(this);
    this.addLine = this.addLine.bind(this);
    this.delLines = this.delLines.bind(this);
    this.linehandleChange = this.linehandleChange.bind(this);
    this.totalLine = this.totalLine.bind(this);
    this.removeDiscount = this.removeDiscount.bind(this);
  }

  componentDidMount() {
    if (this.props.match.path == '/quote/:id') {
      fetch(`/api${this.props.location.pathname}`)
        .then((res) => {
          let getQuote = res;
          console.log('res success: ', getQuote);
          return res.json();
        })
        .then((data) => {
          console.log('data success: ', data);
          let tempLineCount = [];
          for (let i = 0; i < data.part_no.length; i++) {
            tempLineCount.push(i);
          }
          console.log('tempLineCount: ', tempLineCount);
          data.linecount = tempLineCount;
          data.linecounter = tempLineCount.length;
          console.log('TCL: Updateform -> componentDidMount -> data', data);
          this.setState(data);
        });
    }
  }

  handleChange(event) {
    console.log('event.target.id: ', [event.target.name]);
    console.log('event.target.value: ', event.target.value);
    console.log('onChange activated!!!');
    this.setState({[event.target.name]: event.target.value});
  }

  linehandleChange(name, value, row) {
    console.log('this.state[name][row] before: ', this.state[name][row]);
    this.state[name][row] = value;
    console.log('this.state[name][row] after: ', this.state[name][row]);
    this.setState({
      name: this.state[name]
    });
    console.log('onChange activated!!!');
  }

  totalLine(value, row) {
    console.log('this.state.total_price[row] before: ', this.state.total_price[row]);
    this.state.total_price[row] = value;
    console.log('this.state.total_price[row] after: ', this.state.total_price[row]);
    console.log('this.state.total_price: ', this.state.total_price);
    this.setState({
      total_price: this.state.total_price
    });
    console.log('onChange activated!!!');
  }

  printPDF(event) {
    event.preventDefault();
    window.print();
  }

  removeDiscount(event) {
    console.log('removeDiscount fired!');
    if (event.target.checked) {
      document.querySelector('#subTotalDisplay').classList.remove('hideDiscount');
      document.querySelector('#discountDisplay').classList.remove('hideDiscount');
      console.log('box checked');
    } else {
      document.querySelector('#subTotalDisplay').classList.add('hideDiscount');
      document.querySelector('#discountDisplay').classList.add('hideDiscount');
      console.log('box unchecked');
      this.setState({
        discount: 0
      });
    }
  }

  addLine(event) {
    event.preventDefault();
    console.log('addline function activated');
    console.log('current linecounter: ', this.state.linecounter);
    console.log('current linecount: ', this.state.linecount);
    let count = this.state.linecounter;
    console.log('count: ', count);
    for (let i = 0; i < this.state.linecount.length; i++) {
      console.log('for loop started', i, this.state.linecount[i], count);
      while (count <= this.state.linecount[i]) {
        console.log('adding count: ', count);
        count++;
        console.log('added count: ', count);
      }
    }
    let addTolinecount = [...this.state.linecount, count];
    this.setState({linecount: addTolinecount, linecounter: count});
  }

  delLines(id) {
    console.log('id: ', id);
    let arr = [...this.state.linecount];
    arr.splice(arr.indexOf(id), 1);
    this.setState({linecount: arr});
  }

  render() {
    console.log('UPDATE QUOTEFORM THIS.PROPS: ', this.props);
    console.log('UPDATE QUOTEFORM THIS.PROPS.LOCATION.PATHNAME: ', this.props.location.pathname);
    console.log('UPDATE this.state.company_name: ', this.state.company_name);

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
    let formlines;
    let subTotal;
    let grandTotal;
    if (this.state.quantity.length > 0 && this.state.price.length > 0) {
      let tempArrST = this.state.linecount.map((obj) => {
        if (this.state.quantity[obj] !== undefined && this.state.price[obj] !== undefined) {
          return this.state.quantity[obj] * this.state.price[obj];
        } else {
          return 0;
        }
      });
      console.log('temrArrST after mapping: ', tempArrST);
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
    formlines = this.state.linecount.map((obj, index) => {
      // this.setState({newlines: [...this.state.newlines, {}]});
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

    return (
      <form action={'/api/update' + this.props.location.pathname} method="post">
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
            <label htmlFor="discountButton">
              Toggle Discount&nbsp;
              <input
                className="mr-3"
                name="toggleDiscount"
                type="checkbox"
                defaultChecked={this.state.toggleDiscount}
                onClick={this.removeDiscount}
              />
            </label>
            <button onClick={this.addLine} className="btn btn-light mr-3" style={{color: 'black'}}>
              Add Row
            </button>
            <button type="submit" className="btn btn-light mr-3" style={{color: 'black'}}>
              Update quote
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

export default withRouter(Updateform);
