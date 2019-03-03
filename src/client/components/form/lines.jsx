import React from 'react';

class Lines extends React.Component {
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
      quantity: 0,
      price: 0,
      total_price: 0,
      sub_total: 0,
      discount: 0,
      grand_total: 0
    };
    this.tempFunc = this.tempFunc.bind(this);
    this.deleteIt = this.deleteIt.bind(this);
  }

  tempFunc(event) {
    this.props.handleChange(event);
    console.log(`this.props.quantity: `, this.props.quantity);
    console.log(`this.props.price: `, this.props.price);
    // let newtotal = this.props.quantity * this.props.price;
    // this.setState({total_price: newtotal});
  }

  deleteIt(e) {
    e.preventDefault();
    let id = this.props.id;
    this.props.delLines(id);
  }

  render() {
    return (
      <tr id={this.props.id}>
        <td>
          <input
            name="part_no"
            value={this.props.part_no}
            placeholder="1"
            style={{width: '20%', border: '0'}}
            onChange={this.props.handleChange}
          />
        </td>
        <td>
          <input
            name="description"
            value={this.props.description}
            placeholder="Support"
            style={{width: '100%', border: '0'}}
            onChange={this.props.handleChange}
          />
        </td>
        <td>
          <input
            name="quantity"
            value={this.props.quantity}
            placeholder="234"
            style={{width: '40%', border: '0'}}
            onChange={this.tempFunc}
          />
        </td>
        <td>
          $
          <input
            name="price"
            value={this.props.price}
            placeholder="6356"
            style={{width: '50%', border: '0'}}
            onChange={this.tempFunc}
          />
        </td>
        <td>${this.state.total_price}</td>
        <td>
          <button className="hidePrint" onClick={this.deleteIt}>
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default Lines;
// export default withStyles(styles)(Quoteform);
