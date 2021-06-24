import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemsCart extends Component {
  render() {
    const { cartProducts, totalValue } = this.props;
    return (
      <div>
        {console.log(cartProducts)}
        {totalValue}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.productReducer.cartProducts,
  totalValue: state.productReducer.totalValue,
})

export default connect(mapStateToProps, null)(ItemsCart);