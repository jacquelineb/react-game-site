import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Faq from './components/Faq';
import About from './components/About';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/faq' component={Faq} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  );
}

export default App;
