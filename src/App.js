import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';
import './Lcr.css';
import './content/font-awesome.min.css'
import './content/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />

        <script src="../../Scripts/jquery-1.9.0.min.js"></script>
        <script src="../../Scripts/bootstrap.min.js"></script>
        <script src="../../Scripts/classie.js"></script>
        <script src="../../Scripts/cbpAnimatedHeader.js"></script>
        <script src="../../Scripts/jquery.easing.1.3.js"></script>
        <script src="../../Scripts/jquery.stellar.js"></script>
        <script src="scrolling.js"></script>
      </div>
    );
  }
}

export default App;
