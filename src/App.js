import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from 'components/Nav';
import Home from 'components/views/Home';
import AboutMe from 'components/views/AboutMe';
import Contact from 'components/views/Contact';
import Thanks from 'components/views/Thanks';
import Project from 'components/views/Project';
import {HOME, ABOUT_ME, CONTACT, THANKS, PROJECT} from 'config/router/paths';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path={ABOUT_ME}>
          <AboutMe />
        </Route>
        <Route path={CONTACT} exact>
          <Contact />
        </Route>
        <Route path={THANKS} exact>
          <Thanks />
        </Route>
        <Route path={PROJECT} exact>
          <Project />
        </Route>
        <Route path={HOME} exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
