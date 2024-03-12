import React from 'react';
import {Header} from "./components/Header/Header";
import BtnToCart from "src/components/BtnToCart/BtnToCart";
import Input from "src/components/Input";

function App() {

  return (
    <>
      <Header />
        <BtnToCart counter={1} />
        <Input />
    </>
  );
}

export default App;
