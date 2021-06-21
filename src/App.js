import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SchedulePage from './pages/SchedulePage';
import VideoCallPage from './pages/VideoCallPage';


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/:videoId">
            <VideoCallPage />
          </Route>
          <Route path="/">
            <SchedulePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
