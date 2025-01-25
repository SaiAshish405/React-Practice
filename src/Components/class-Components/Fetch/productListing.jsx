import { Component } from "react";
import ReactSpinners from "../../spinners/spinners";
import axios from "axios";

class ProductListing extends Component {
  state = {
    ProductList: [],
    isLoading: false,
    error: null,
  };
  componentDidMount() {
    this.DataFetching();
  }
  //   DataFetching = () => {
  //     this.setState({
  //       isLoading: true,
  //     });
  //     fetch("https://fakestoreapi.com/products")
  //       .then((response) => response.json())
  //       .then((response) => {
  //         this.setState({
  //           ProductList: response,
  //           isLoading: false,
  //         });
  //       });
  //   };
  //   DataFetching = async () => {
  //     this.setState({
  //       isLoading: true,
  //     });
  //     try {
  //       const initialRespone = await fetch("https://fakestoreapi.com/products");
  //       const finalResponse = await initialRespone.json();
  //       this.setState({
  //         ProductList: finalResponse,
  //         isLoading: false,
  //       });
  //     } catch (err) {
  //       console.log(err, "error");
  //       this.setState({
  //         error: "Server  is buzy..",
  //       });
  //     } finally {
  //       this.setState({
  //         isLoading: false,
  //       });
  //     }
  //   };
  DataFetching = async () => {
    this.setState({
      isLoading: true,
    });
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response);
      if (response.status === 200) {
        this.setState({
          ProductList: response.data,
          isLoading: false,
        });
      }
    } catch (err) {
      console.lod("error");
      this.setState({
        error: "server error..",
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };
  render() {
    return (
      <>
        <h2>List of Products..</h2>
        {this.state.isLoading ? (
          <>
            <h2>Loading...</h2>
            <ReactSpinners />
          </>
        ) : (
          <div>
            <ol>
              {this.state.ProductList.map((eachProduct) => {
                return (
                  <div key={eachProduct.id}>
                    <h3>
                      <li >
                        {eachProduct.title}
                        {eachProduct.rating.rate}
                      </li>
                    </h3>
                  </div>
                );
              })}
            </ol>
          </div>
        )}
      </>
    );
  }
}
export default ProductListing;
