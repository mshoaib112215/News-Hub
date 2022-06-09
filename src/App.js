import "./App.css";
import Nav from "./Nav";
import News from "./News";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />

        <Switch>
          <Route exact path='/'>
            <News key='general' category='general' />
          </Route>
          <Route exact path='/business'>
            <News key='business' category='business' />
          </Route>
          <Route exact path='/technology'>
            <News key='technology' category='technology' />
          </Route>
          <Route exact path='/sports'>
            <News key='sports' category='sports' />
          </Route>
          <Route exact path='/entertainment'>
            <News key='entertainment' category='entertainment' />
          </Route>
          <Route exact path='/health'>
            <News key='health' category='health' />
          </Route>
          <Route exact path='/science'>
            <News key='science' category='science' />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
