import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from './LifeCycleComponent';
import LoginPage from './LoginPage';



const root = ReactDOM.createRoot(document.getElementById('root'));

//Tidak memunculkan hasil apa apa
function HelloComponent() {
  return HelloComponent
}

class StateFullComponent extends React.Component {
  render() {
    return <p>StateFullComponent</p>
  }
}

root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
