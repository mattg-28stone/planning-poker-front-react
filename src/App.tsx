import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import EnterRoom from './pages/EnterRoom';
import Room from './pages/Room';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/enter-room" />
          </Route>
          <Route path="/enter-room" component={EnterRoom} />
          <Route path="/room/:roomId" component={Room} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
