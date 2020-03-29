import React, { Component } from "react";
import { ProductConsumer } from "../context";

export class Wrong extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { error } = value;
          if (!error) {
            return null;
          } else {
            return (
              <div>
                {" "}
                <h1 className="text-center text-danger">
                  {" "}
                  Sorry we could'nt find any film of it{" "}
                </h1>{" "}
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Wrong;

