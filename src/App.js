import React from 'react';
import './App.css';
import { Contact, Footer, Gallery, Header,Nav } from './components';

function App() {
  return (
    <div className="App">
      {/* <h2>Welcome sPaCeY</h2> */}
      <Nav />
      <Header />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
