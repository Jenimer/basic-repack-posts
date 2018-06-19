import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';



const App =()=> (
  <Fragment>
    <Route exact path='/' component={Home} />
    <Route path='/NoMatch' component={NoMatch} />
  </Fragment>
)

export default App;
