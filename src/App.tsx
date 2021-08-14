import React from 'react';
import { Switch,Route, HashRouter as Router } from 'react-router-dom';
import './App.scss';
import Homepage from './views/Home/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Categories from './views/Categories/Categories';
const loading = () => <div>Loading</div>

function App() {
  return (
   <Router>
     <React.Suspense fallback={loading()}>
       <Switch>
         <Route exact path="/" render={props => <Homepage/>}/>
         <Route exact path="/categories" render={props => <Categories/>}/>

       </Switch>
     </React.Suspense>
   </Router>
  );
}

export default App;
