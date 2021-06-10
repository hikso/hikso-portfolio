import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './pages/Landing'

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Landing</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
