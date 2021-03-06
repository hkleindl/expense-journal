import React from 'react'
import { useLocation, Route, Switch } from 'react-router-dom'

import Navbar from './Navbar'
import Welcome from './Welcome'
import AccountContainer from './AccountContainer'
import Home from './Home' 

function App() {
  const location = useLocation()
  return (
    <div>
      {
        location.pathname !== '/' && <Navbar />
      } 
      <Switch>
        <Route path='/' exact component={Welcome} />
        <Route path='/home' exact component={Home} />
        <Route path='/accounts/:id' exact component={AccountContainer} />
      </Switch> 
    </div>
  );
}

export default App;
