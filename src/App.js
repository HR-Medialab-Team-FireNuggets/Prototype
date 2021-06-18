import './App.css';
import { useState } from 'react';

import SchedulePage from './pages/SchedulePage';
import VideoCallPage from './pages/VideoCallPage';


function App() {
  // const [scheduleData, setScheduleData] = useState();
  const [videoCallStatus, setVideoCallStatus] = useState();

  

  return (
    <div className="App">
      {videoCallStatus 
        ? <VideoCallPage />
        : <SchedulePage videoCall={(status) => setVideoCallStatus(status)}/>
      }
    </div>
  );
}

export default App;
