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
import Post1 from './Posts/Post1.js';
import Post2 from './Posts/Post2.js';
import Post3 from './Posts/Post3.js';

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

        <Route path="/post1">
          <Header/>
          <Post1/>
          <Footer/>
        </Route>
        <Route path="/post2">
          <Header/>
          <Post2/>
          <Footer/>
        </Route>
        <Route path="/post3">
          <Header/>
          <Post3/>
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
