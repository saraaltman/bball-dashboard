import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import WatchList from './Components/watchlist/Watchlist';
import Analytics from './Components/analytics/Analytics';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/watchlist" component={WatchList} />
          <Route exact path="/analytics" component={Analytics} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
