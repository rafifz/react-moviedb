import React, { Component } from "react";
import { ProductConsumer } from "../context";
import Result from "./Result";

class Resultmap extends Component {
  render() {
    return (
      <div className="container bg-dark pb-3" style={{ display: "grid" }}>
        <div className="row">
          <ProductConsumer>
            {value => {
              if (value.isLoading) {
                return (
                      <h1 className="mx-auto">Loading...</h1>
                );
              } else {
                return value.results.map(results => {
                  return <Result key={results.imdbID} results={results} />;
                });
              }
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default Resultmap;
