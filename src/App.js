import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from 'components/Nav';
import Home from 'components/views/Home';
import AboutMe from 'components/views/AboutMe';
import Contact from 'components/views/Contact';
import Thanks from 'components/views/Thanks';
import {HOME, ABOUT_ME, CONTACT, THANKS} from 'config/router/paths';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path={ABOUT_ME}>
          <AboutMe />
        </Route>
        <Route path={HOME} exact>
          <Home />
        </Route>
        <Route path={CONTACT} exact>
          <Contact />
        </Route>
        <Route path={THANKS} exact>
          <Thanks />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
