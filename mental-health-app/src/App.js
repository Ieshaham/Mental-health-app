import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resources from './components/Resources';
import Footer from './components/Footer';
import Mission from './components/Mission';
import Gemini from './components/Gemini';
import Userauth from './components/Userauth';
import Usersignup from './components/Usersignup';
import GoBack from './components/GoBack';


const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/userauth" component={Userauth} />
          <Route path="/mission" component={Mission} />
          <Route path="/resources" component={Resources} />
          <Route path="/gemini" component={Gemini} />
          <Route path="/usersignup" component={Usersignup} /> 
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
