import {HomePage} from './components/pages/homePage/homePage'
import {AboutPage} from './components/pages/aboutPage/aboutPage'
import {ProjectPage} from './components/pages/projectsPage/projectsPage'
import {InterestPage } from './components/pages/interestsPage/interestsPage'
import { Routes, Route, Link  } from 'react-router-dom';
import './assets/css/App.css';

function App() {
  return (
    <>
      <HomePage/>
      <AboutPage/>
      <InterestPage/>
      <ProjectPage/>
    </>
  );
}

export default App;
