import {HomePage} from './components/pages/homePage/homePage'
import {AboutPage} from './components/pages/aboutPage/aboutPage'
import { Routes, Route, Link  } from 'react-router-dom';
import './assets/css/App.css';

function App() {
  return (
    <>
      <HomePage/>
      <AboutPage/>
    </>
  );
}

export default App;
