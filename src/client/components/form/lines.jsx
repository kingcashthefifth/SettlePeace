import React from 'react';

class Lines extends React.Component {
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
      quantity: 0,
      price: 0,
      total_price: 0,
      sub_total: 0,
      discount: 0,
      grand_total: 0
    };
    this.tempFunc = this.tempFunc.bind(this);
    this.deleteIt = this.deleteIt.bind(this);
    // this.passBackTotal = this.passBackTotal.bind(this);
  }

  tempFunc(event) {
    const name = event.target.name;
    console.log('TCL: Lines -> tempFunc -> name', name);
    const value = event.target.value;
    console.log('TCL: Lines -> tempFunc -> value', value);
    const row = this.props.id;
    console.log('TCL: Lines -> tempFunc -> row', row);

    this.props.linehandleChange(name, value, row);

    if (this.props.price && this.props.quantity) {
      let lineTotal = this.props.price * this.props.quantity;
      this.props.totalLine(lineTotal, row);
    }
    // console.log(`this.props.quantity: `, this.props.quantity);
    // console.log(`this.props.price: `, this.props.price);
    // let newtotal = this.props.quantity * this.props.price;
    // this.setState({total_price: newtotal});
  }

  // passBackTotal(value) {
  //   let row = this.props.id;
  //   this.props.totalLine(value, row);
  // }

  deleteIt(e) {
    e.preventDefault();
    let id = this.props.id;
    this.props.delLines(id);
  }

  render() {
    let lineTotal;
    if (this.props.price && this.props.quantity) {
      lineTotal = this.props.price * this.props.quantity;
      // this.passBackTotal(lineTotal);
    } else {
      lineTotal = 0;
    }
    return (
      <tr id={this.props.id}>
        <td>
          <input
            name="part_no"
            defaultValue={this.props.part_no}
            placeholder="1"
            style={{width: '20%', border: '0'}}
            onChange={this.tempFunc}
          />
        </td>
        <td>
          <input
            name="description"
            defaultValue={this.props.description}
            placeholder="Support"
            style={{width: '100%', border: '0'}}
            onChange={this.tempFunc}
          />
        </td>
        <td>
          <input
            name="quantity"
            defaultValue={this.props.quantity}
            placeholder="234"
            style={{width: '40%', border: '0'}}
            onChange={this.tempFunc}
          />
        </td>
        <td>
          $
          <input
            name="price"
            defaultValue={this.props.price}
            placeholder="6356"
            style={{width: '50%', border: '0'}}
            onChange={this.tempFunc}
          />
        </td>
        <td>$ {lineTotal}</td>
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
