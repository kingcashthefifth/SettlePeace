import React from 'react';
import Lines from './lines';

class Formrow extends React.Component {
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
    // this.tempFunc = this.tempFunc.bind(this);
  }

  // tempFunc(event) {
  //   this.props.handleChange(event);
  //   console.log(`this.props.quantity: `, this.props.quantity);
  //   console.log(`this.props.price: `, this.props.price);
  //   // let newtotal = this.props.quantity * this.props.price;
  //   // this.setState({total_price: newtotal});
  // }

  // tempFu;

  render() {
    let individualLines;

    if (this.props.doclines) {
      individualLines = this.props.doclines.map((obj) => {
        return (
          <Lines
            part_no={obj.part_no}
            description={obj.description}
            quantity={obj.quantity}
            price={obj.price}
            handleChange={this.props.handleChange}
          />
        );
      });
    } else if (this.props.newlines) {
      individualLines = this.props.newlines.map((obj) => {
        return (
          <Lines
            part_no={obj.part_no}
            description={obj.description}
            quantity={obj.quantity}
            price={obj.price}
            handleChange={this.props.handleChange}
          />
        );
      });
    } else {
      individualLines = (
        <React.Fragment>
          <Lines />
          <Lines />
          <Lines />
        </React.Fragment>
      );
    }

    return {individualLines};
  }
}

export default Formrow;
// export default withStyles(styles)(Quoteform);
