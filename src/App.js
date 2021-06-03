// import logo from '..public/images/ironhack-logo.svg';
// import menu from '../menu-top.svg';
import './App.css';
import Landing from './components/Landing.jsx'
import Feature1 from './components/Feature1.jsx'
import Feature2 from './components/Feature2.jsx'
import Feature3 from './components/Feature3.jsx'
import Feature4 from './components/Feature4.jsx'



function App() {
  return (
      <div className="App">
        <header className="App-header">
          <div className="navbar">
            <img src="/images/ironhack-logo.svg" className="logo" alt="logo" />
            <img src="/images/menu-top.svg" className="menu" alt="menu-bar"/>
          </div>
          
          <Landing />
        </header>
        <div className="feature-container">
          <Feature1 />
          <Feature2 />
          <Feature3 />
          <Feature4 />
        </div>
      </div>
  );
}

export default App;
