
import React from 'react';
// import { Table } from 'react-bootstrap';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      products: []
    }
  }

  componentDidMount() {
    const apiUrl = 'http://localhost/reactcrud-app/fetch.php';

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            products: result
          });
          console.log(this.State);
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {
    const { error, products} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div>
          <h2>Product List</h2>
          <table>
            <thead>
              <tr>
                <th>#ID</th>
                <th>Product Name</th>
                <th>SKU</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.fullname}</td>
                  <td>{product.email}</td>
                  <td>{product.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default ProductList;

