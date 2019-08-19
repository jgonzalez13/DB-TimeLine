import React from 'react';
import './styles/main.sass'

// ? components
import Header from './components/Header.component'
import Footer from './components/Footer.component'
import Time from './components/Time.container'


function App() {
  return (
    <div className="App">
      <Header />
      <Time />
      <Footer />
    </div>
  );
}

export default App;
