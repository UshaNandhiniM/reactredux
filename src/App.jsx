import React, { createContext, useState } from "react";
import { Provider } from "react-redux";
import ProductStore from "./Redux/productsStore";
import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";


export const mycontext = createContext("");
const App = () => {
  
  return (
    <div className="container">
      <div className="row">
        <Provider store={ProductStore}>
          <NavBar/>
          <Cart/>
        </Provider>
      </div>
    </div>
  );
};

export default App;
