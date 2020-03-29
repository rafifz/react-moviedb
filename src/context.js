import React, { Component } from "react";
import Axios from "axios";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    s: "",
    results: [],
    selected: {},
    error: false,
    isLoading:false
  };
  api = "https://www.omdbapi.com/?apikey=51622090";

  componentDidMount() {
    Axios.get(`${this.api}&s=dark`).then(({ data }) => {
      let results = data.Search
      this.setState(prevState => {
        return { ...prevState, results: results};
      });
    });
  }

  search = e => {
    if (e.key === "Enter") {
      this.setState(()=>{
        return {isLoading:true}
      })
      Axios(this.api + "&s=" + this.state.s).then(({ data }) => {
        if (data.Response === "False") {
          this.setState(prevState => {
            return { ...prevState, error : true, isLoading:false };
          });
        } else {
          let results = data.Search;
          this.setState(prevState => {
            return { ...prevState, results: results, error: false, isLoading:false };
          });
        }
      });
    }
  };

  handleInput = e => {
    let s = e.target.value;

    this.setState(prevState => {
      return { ...prevState, s:s };
    });
  };

  openPopup = id => {
    this.setState(()=>{
      return {isLoading:true}
    })
    Axios(this.api + "&i=" + id).then(({ data }) => {
      let results = data;
      this.setState(prevState => {
        return { ...prevState, selected:results, isLoading:false };
      });
    });
  };

  closePopup = () => {
    this.setState(prevState => {
      return { ...prevState, selected: {} };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleInput: this.handleInput,
          search: this.search,
          openPopup: this.openPopup,
          closePopup: this.closePopup,
          asu: this.asu
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
// Title Year imdbID Type Poster
