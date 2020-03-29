import React from "react";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import "./Components/style.scss";
import Resultmap from "./Components/Resultmap";
import Popup from "./Components/Popup";
import { ProductConsumer } from "./context";
import Wrong from "./Components/Wrong";
import Footer from "./Components/Footer";

function App() {
  return (
    <React.Fragment>
      <ProductConsumer>
        {value => {
          return (
            <div>
              <div className="bg-dark home">
                <Nav />
                <Search /> 
                <Wrong/>     
                {(typeof value.selected.Title != 'undefined')? false : <Resultmap /> }
                {(typeof value.selected.Title != 'undefined')? <Popup/> : false }
              </div>
              <Footer/>
            </div>
          );
        }}
      </ProductConsumer>
    </React.Fragment>
  );
}

export default App;

