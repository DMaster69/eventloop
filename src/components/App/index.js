import React, { Component } from 'react';
import Header from '../Header';
import Nav from '../Nav';
import Intro from '../Intro';
import Footer from '../Footer';
import Sponsors from '../Sponsors';
import Offer from '../Offer';
import Ticket from '../Ticket';
import Questions from '../Questions';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <div id="wrapper">
        <Header />
        <Nav />
        <div id="main">
          <Intro />
          <Sponsors />
          <Offer />
          <Ticket />
          <Questions />
        </div>
        <Footer />
      </div>
    );
  }
}
