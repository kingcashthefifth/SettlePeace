import React from 'react';
// import PropTypes from 'prop-types';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import {withStyles} from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

// const styles = (theme) => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap'
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit
//   },
//   docline: {
//     [`& fieldset`]: {
//       borderRadius: 0
//     }
//   },
//   dense: {
//     marginTop: 16
//   },
//   menu: {
//     width: 200
//   },
//   button: {
//     margin: theme.spacing.unit
//   },
//   root: {
//     ...theme.mixins.gutters(),
//     paddingTop: theme.spacing.unit * 2,
//     paddingBottom: theme.spacing.unit * 2
//   }
// });

class Quoteform extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      company_name: '',
      company_addr1: '',
      company_addr2: '',
      company_postal: '',
      company_logo: '',
      customer_com_name: '',
      customer_com_addr1: '',
      customer_com_addr2: '',
      customer_com_postal: '',
      customer_attention: '',
      customer_contact1: '',
      customer_contact2: '',
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
      grand_total: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.addQuote = this.addQuote.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  addQuote() {}

  printPDF() {
    window.print();
  }

  render() {
    // const {classes} = this.props;
    // const cellLook = {padding: '0', margin: '0', width: '100%', height: '100%'};
    // const cellAdjust = {margin: '0', padding: '0'};
    // const tableCell = {display: 'table-cell'};

    return (
      // <form action="/quotelist" method="post">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="row px-5 pt-5 pb-1">
                  <div className="col-md-6">
                    <img
                      src="https://res.cloudinary.com/cashcloudinary/image/upload/v1551104842/imageedit_3_3603235945.png"
                      width="300px"
                    />
                  </div>

                  <div className="col-md-6 text-right">
                    <p
                      name="my_address"
                      className="font-weight-bold mb-1"
                      contentEditable
                      suppressContentEditableWarning
                    >
                      Above Minimal Tech Pte. Ltd.
                    </p>
                    <p name="my_address" className="mb-1" contentEditable suppressContentEditableWarning>
                      Midview City
                    </p>
                    <p name="my_address" className="mb-1" contentEditable suppressContentEditableWarning>
                      Blk 28 Sin Ming Lane #03-135
                    </p>
                    <p name="my_address" className="mb-1" contentEditable suppressContentEditableWarning>
                      Singapore, 573974{' '}
                    </p>

                    <p className="mb-1" contentEditable suppressContentEditableWarning>
                      <span className="text-muted" contentEditable suppressContentEditableWarning>
                        GST Registration:{' '}
                      </span>{' '}
                      10253642
                    </p>
                  </div>
                </div>

                <hr className="my-5" />

                <div className="row pb-5 px-5">
                  <div className="col-md-6">
                    <h4 className="font-weight-bold mb-4" contentEditable suppressContentEditableWarning>
                      Wild Tree Camp Tools Pte. Ltd.
                    </h4>
                    <p className="mb-1" contentEditable suppressContentEditableWarning>
                      51 Waterloo St, #01-01
                    </p>
                    <p contentEditable suppressContentEditableWarning>
                      Singapore, 187969
                    </p>
                    <p className="mb-1" contentEditable suppressContentEditableWarning>
                      <strong>Attention : </strong> Mr. Phua Liang Jun
                    </p>
                    <p className="mb-1" contentEditable suppressContentEditableWarning>
                      <strong>Contacts : </strong>phualiangjun@gmail.com, +65 8888 1688
                    </p>
                  </div>

                  <div className="col-md-6 text-right" contentEditable suppressContentEditableWarning>
                    <p className="font-weight-bold mb-2" contentEditable suppressContentEditableWarning>
                      Quote Reference: #550
                    </p>
                    <p className="mb-1">
                      <span className="mb-1" contentEditable suppressContentEditableWarning>
                        Date:{' '}
                      </span>{' '}
                      4 Mar, 2019
                    </p>
                  </div>
                </div>

                <div className="row px-5">
                  <div className="col">
                    <h5 className="mb-2" contentEditable suppressContentEditableWarning>
                      <strong>Job title :</strong>
                    </h5>
                    <p className="mb-1 text-center" contentEditable suppressContentEditableWarning>
                      Supply of Software Development Consultancy Services
                    </p>
                  </div>
                </div>

                <div className="row p-5">
                  <div className="col-md-12">
                    <table className="table">
                      <thead>
                        <tr>
                          <th
                            className="border-0 text-uppercase small font-weight-bold"
                            contentEditable
                            suppressContentEditableWarning
                          >
                            ID
                          </th>
                          <th
                            className="border-0 text-uppercase small font-weight-bold"
                            contentEditable
                            suppressContentEditableWarning
                          >
                            Item
                          </th>
                          <th
                            className="border-0 text-uppercase small font-weight-bold"
                            contentEditable
                            suppressContentEditableWarning
                          >
                            Description
                          </th>
                          <th
                            className="border-0 text-uppercase small font-weight-bold"
                            contentEditable
                            suppressContentEditableWarning
                          >
                            Quantity
                          </th>
                          <th
                            className="border-0 text-uppercase small font-weight-bold"
                            contentEditable
                            suppressContentEditableWarning
                          >
                            Unit Cost
                          </th>
                          <th
                            className="border-0 text-uppercase small font-weight-bold"
                            contentEditable
                            suppressContentEditableWarning
                          >
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td name="part_no" contentEditable suppressContentEditableWarning>
                            1
                          </td>

                          {/* <td>
                              <input name="part_no">1</input>
                            </td> */}
                          <td contentEditable suppressContentEditableWarning>
                            Software
                          </td>
                          <td name="description" contentEditable suppressContentEditableWarning>
                            LTS Versions
                          </td>
                          <td contentEditable suppressContentEditableWarning>
                            21
                          </td>
                          <td name="price" contentEditable suppressContentEditableWarning>
                            $321
                          </td>
                          <td contentEditable suppressContentEditableWarning>
                            $3452
                          </td>
                        </tr>
                        <tr>
                          <td name="part_no" contentEditable suppressContentEditableWarning>
                            1
                          </td>
                          <td contentEditable suppressContentEditableWarning>
                            Software
                          </td>
                          <td name="description" contentEditable suppressContentEditableWarning>
                            Support
                          </td>
                          <td contentEditable suppressContentEditableWarning>
                            234
                          </td>
                          <td name="price" contentEditable suppressContentEditableWarning>
                            $6356
                          </td>
                          <td contentEditable suppressContentEditableWarning>
                            $23423
                          </td>
                        </tr>
                        <tr>
                          <td name="part_no" contentEditable suppressContentEditableWarning>
                            1
                          </td>
                          <td contentEditable suppressContentEditableWarning>
                            Software
                          </td>
                          <td name="description" contentEditable suppressContentEditableWarning>
                            Sofware Collection
                          </td>
                          <td contentEditable suppressContentEditableWarning>
                            4534
                          </td>
                          <td name="price" contentEditable suppressContentEditableWarning>
                            $354
                          </td>
                          <td contentEditable suppressContentEditableWarning>
                            $23434
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="d-flex flex-row-reverse bg-dark text-white p-4">
                  <div className="py-3 px-5 text-right">
                    <div className="mb-2" contentEditable suppressContentEditableWarning>
                      Grand Total
                    </div>
                    <div className="h2 font-weight-light" contentEditable suppressContentEditableWarning>
                      $234,234
                    </div>
                  </div>

                  <div className="py-3 px-5 text-right">
                    <div className="mb-2" contentEditable suppressContentEditableWarning>
                      Discount
                    </div>
                    <div className="h2 font-weight-light" contentEditable suppressContentEditableWarning>
                      10%
                    </div>
                  </div>

                  <div className="py-3 px-5 text-right">
                    <div className="mb-2" contentEditable suppressContentEditableWarning>
                      Sub - Total amount
                    </div>
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

        <div className="container mt-3 px-5 py-3 text-right" style={{backgroundColor: 'lightgrey'}}>
          <button className="btn btn-light mr-3" style={{color: 'black'}}>
            Create quote
          </button>
          <button className="btn btn-success" onClick={this.printPDF}>
            PDF
          </button>
        </div>
      </div>
      // </form>
    );
  }
}

export default Quoteform;
// export default withStyles(styles)(Quoteform);
