import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyComponent from './home.jsx';
import Diseases from './diseases.jsx';
import MenuPage from './menu.jsx';
import Navbar from './header.jsx';
import Footer from './footer.jsx';


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={MyComponent} />
        <Route path="/diseases" component={Diseases} />
        <Route path="/menu" component={MenuPage} />
       <Footer/>
      </Switch>
    </Router>
</>
  );
};

export default App;
