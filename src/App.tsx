import React from 'react';
import { Switch,Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Homepage from './views/Home/Homepage';

const loading = () => <div>Loading</div>

function App() {
  return (
   <Router>
     <React.Suspense fallback={loading()}>
       <Switch>
         <Route exact path="/" render={props => <Homepage/>}/>
       </Switch>
     </React.Suspense>
   </Router>
  );
}

export default App;
