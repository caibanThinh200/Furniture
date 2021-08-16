import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Section from './Route/Section';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import 'antd/dist/antd.css';
import { Divider } from 'antd';
import Wrapper from './Component/Wrapper';

function App() {
  return (
    <Router>
        <NavBar/>
        <Section/>
        <Footer className="mt200 footer-stick"/>
    </Router>
  );
}

export default App;
