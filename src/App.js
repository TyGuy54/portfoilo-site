import {HomePage} from './components/pages/homePage/homePage'
import {AboutPage} from './components/pages/aboutPage/aboutPage'
import {ProjectPage} from './components/pages/projectsPage/projectsPage'
import './assets/css/App.css';

function App() {
  return (
    <>
      <HomePage/>
      <AboutPage/>
      {/* <InterestPage/> */}
      <ProjectPage/>
    </>
  );
}

export default App;
