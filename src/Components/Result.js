import React, { Component } from "react";
import { ProductConsumer } from "../context";

export class Result extends Component {
  render() {
    const { Title, Poster, imdbID } = this.props.results;
    return (
      <ProductConsumer>
        {value => {
          const { openPopup, error } = value;

          if (!error) {
            return (
              <div
                className="col-lg-3 col-md-4 col-sm-6 pt-4 col-container"
                onClick={() => openPopup(imdbID)}
              >
                <div className="card">
                  <a href="#top">
                    <img src={Poster} alt="" width="100%" />
                    <div className="card-footer">
                      <h5 className="card-text text-center">{Title}</h5>
                    </div>
                  </a>
                </div>
              </div>
            );
          } else {
            return null;
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Result;
