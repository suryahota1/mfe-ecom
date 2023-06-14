import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import CartContent from "./CartContent";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Router>
      <Header />
			<div className="my-10">
        <CartContent />
			</div>
			<Footer />
    </Router>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
