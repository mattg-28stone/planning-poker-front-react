import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import EnterGameRoom from './pages/EnterGameRoom';
import GameRoom from './pages/GameRoom';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/enter-game-room" />
          </Route>
          <Route path="/enter-game-room" component={EnterGameRoom} />
          <Route path="/game-room/:roomId" component={GameRoom} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
