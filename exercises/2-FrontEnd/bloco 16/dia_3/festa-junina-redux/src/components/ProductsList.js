//criar mapStateToProps. Exemplo:

/* const mapStateToProps = (state) => ({
  products: state.productsReducer.products
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList); */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { addProduct } from '../actions';

class ProductsList extends Component {
  render() {
    const { products, addToCart } = this.props;
    return (
      <div>
        <ul>Produtos disponíveis:
          {products.map((product) => <li onClick={() => addToCart(product)} key={product.id}>{product.name}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.productReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addProduct(product)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);