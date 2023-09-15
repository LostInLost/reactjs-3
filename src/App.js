import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import { Component } from 'react';
import Footer from './Components/Footer';
import List from './Components/List'
import CssPage from './Components/CssPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Component dari Class App</h1>
        <List />
        {/* Dengan adanya props kita dapat memasukkan sebuah value / data kedalam sebuah component
        dari luar component nya */}
        <Footer judul={'Halaman Footer'} nama={'Aufa'}  />
        <CssPage />
      </div>
    )
  }
}

export default App;
