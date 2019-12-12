import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import { RegisterUser } from "./components/registerUser";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Homepage } from "./components/homepage";
import { AddCompany } from "./components/addCompany";
import { CompanyDetails } from "./components/companyDetails";
import { CompanyList } from "./components/companyList";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <AddCompany/> */}
      <BrowserRouter>


        <Homepage />


      </BrowserRouter>
      
      {/* <RegisterUser/> */}
      {/* <CompanyDetails/> */}
      {/* <CompanyTab/> */}
      {/* <CompanyList/> */}
      {/* <Footer/>s */}
    </div>
  );
}

export default App;
