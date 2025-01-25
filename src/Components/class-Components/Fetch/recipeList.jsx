import axios from "axios";
import { Component } from "react";
import ReactSpinners from "../../spinners/spinners";

class RecipeList extends Component {
  // state = {
  //   Recipee: [],
  //   isLoading: false,
  //   error: null,
  // };
  constructor(){
    super()
    this.state={
      Recipee: [],
    isLoading: false,
    error: null,

    }
  }
  componentDidMount() {
    this.DataFetch();
  }
  DataFetch = async () => {
    this.setState({
      isLoading: true,
    });
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      console.log(response);
      if (response.status === 200) {
        this.setState({
          Recipee: response.data.recipes,
          isLoading: false,
        });
      }
    } catch (err) {
      console.log(err, "error");
      this.setState({
        error: "Server error..",
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
        {this.state.isLoading ? (
          <>
            <h2>Loading...</h2>
            <ReactSpinners />
          </>
        ) : (
          <>
            <h1>Recipes List..</h1>
            <ol>
              {this.state.Recipee.map((eachRecipe) => {
                return (
                  <div key={eachRecipe.id}>
                    <li>{eachRecipe.name}</li>
                  </div>
                );
              })}
            </ol>
          </>
        )}
      </>
    );
  }
}
export default RecipeList;
