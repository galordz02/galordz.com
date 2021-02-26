import './css/App.css';
import Hero from './Hero.js';
import Sections from './Sections.js';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from './Projects';
import Vlog from './Vlog.js'

function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route path="/projects">
          <Header/>
          <Projects/>
          <Footer/>
        </Route>
        <Route path="/vlog">
          <Header/>
          <Vlog/>
          <Footer/>
        </Route>
        <Route path="/">
          <Hero/>
          <Sections/>
          <Footer/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
