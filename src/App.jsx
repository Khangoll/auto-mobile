import React from "react";
import Hero from "./components/Hero";
import News from "./components/News";
import Products from "./components/Products";
import Popup from "./components/Popup";
import Passengers from "./components/Passengers";
import Comments from "./components/Comments";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <div className="">
      <Hero />
      <News />
      <Products />
      <Passengers />
      <Comments />
      <Contacts />
      {/* <Popup /> */}
    </div>
  );
};

export default App;
