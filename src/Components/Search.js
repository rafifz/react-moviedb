import React, { Component } from "react";
import { ProductConsumer } from "../context";

export class Search extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const{handleInput,search}= value
          return (
            <div className="container-fluid bg-dark pb-2">
              <div className="form-group container">
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="search..."
                  onChange={handleInput}
                  onKeyPress={search}
                />
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Search;

