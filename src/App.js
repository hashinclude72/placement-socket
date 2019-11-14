import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { RegisterUser } from "./components/registerUser";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Login } from "./components/login";
import { AddCompany } from "./components/addCompany";
import { CompanyTab } from "./components/companyTab";
import { CompanyDetails } from "./components/companyDetails";

function App() {
  return (
    <div className="App">
      <Header/>
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
      {/* <Login/> */}
      {/* <RegisterUser/> */}
      <CompanyDetails/>
      <CompanyTab/>
      <Footer/>
    </div>
  );
}

export default App;
