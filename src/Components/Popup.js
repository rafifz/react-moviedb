import React, { Component } from "react";
import { ProductConsumer } from "../context";

export class Popup extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {closePopup} = value
          const {
            Plot,
            Poster,
            Title,
            imdbRating,
            Year,
            Genre,
            Actors,
            Writer,
            Director
          } = value.selected;
          return (
            <div className="popup container-fluid bg-dark pt-4 ">
              <div className="container">
                <div className="my-4">
                  <h5>
                    {Title} ({Year})
                  </h5>
                  <p>imdRating : {imdbRating}</p>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <img src={Poster} alt="" width="100%" />
                  </div>
                  <div className="col-sm-9">
                    <p>
                      {Plot} <br/> <br/>
                      genre : {Genre} <br/>
                      stars : {Actors} <br/>
                      writer : {Writer} <br/>
                      Director : {Director}
                    </p>
                  </div>
                </div>
                <button type="button" className="btn btn-danger mt-2" onClick={closePopup}>Close</button>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Popup;

