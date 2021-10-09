import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './components/Home';
import Roadmap from './components/Roadmap';
import Attributes from './components/Attributes';

function App() {
  return (

    <Router>
    <div className="App">

      
      <div className="content">

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/roadmap">

            <Roadmap />
          </Route>

          <Route path="/attributes">

            <Attributes />

          </Route>


        </Switch>


      </div>
      
    </div>

    <Footer />
    </Router>
  );
}

export default App;
