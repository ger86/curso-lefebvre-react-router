import {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from 'components/Nav';
const Home = lazy(() => import('components/views/Home'));
const AboutMe = lazy(() => import('components/views/AboutMe'));
const Contact = lazy(() => import('components/views/Contact'));
const Thanks = lazy(() => import('components/views/Thanks'));
const Project = lazy(() => import('components/views/Project'));
import {HOME, ABOUT_ME, CONTACT, THANKS, PROJECT} from 'config/router/paths';
import './App.css';

function App() {
  return (
    <Suspense fallback="Cargando aplicación...">
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
    </Suspense>
  );
}

export default App;
