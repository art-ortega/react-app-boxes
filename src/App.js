import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js'

class App extends Component {
    render(){
  return (
    <div>
      <header className="App-header">
        <Header/>
        <Content/>
        <Footer/>
      </header>
    </div>
  );
}
}

export default App;
