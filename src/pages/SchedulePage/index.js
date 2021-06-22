import './SchedulePage.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

function SchedulePage(props) {
  const [selectedDate, setSelectedDate] = useState();
  const [validationMessage, setValidationMessage] = useState(false);
  const [meetings, setMeetings] = useState();
  const [activeDate, setActiveDate] = useState();

  function onClickHandler(e) {
    setSelectedDate(e)
    setValidationMessage(false)
    setActiveDate(selectedDate)
  }

  const onSubmit = () => {
    if(selectedDate) {
      setValidationMessage(false)
      setMeetings(selectedDate)
    } else {
      setValidationMessage(true)
    }
  }

  return (
    <div className="Schedule">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1>Plan een gesprek in</h1>
            <h2>Tijd om zaken <span>te regelen</span> voor een goede re-intregratie.</h2>
          </div>
        </div>

        <div className="date-picker row">
          <button className="date-button col-md-2" onClick={() => onClickHandler('11:00, 12 juli 2021')}>
            <div className={`date-card ${activeDate === '11:00, 12 juli 2021' ? 'active' : ''}`}>
              <p><span>11:00 uur</span></p>
              <p>12 juli 2021</p>
            </div>
          </button>
          <button className="date-button col-md-2" onClick={() => onClickHandler('14:30, 12 juli 2021')}>
            <div className={`date-card ${activeDate === '14:30, 12 juli 2021' ? 'active' : ''}`}>
              <p><span>14:30 uur</span></p>
              <p>12 juli 2021</p>
            </div>
          </button>
          <button className="date-button col-md-2" onClick={() => onClickHandler('10:00, 13 juli 2021')}>
            <div className={`date-card ${activeDate === '10:00, 13 juli 2021' ? 'active' : ''}`}>
              <p><span>10:00 uur</span></p>
              <p>13 juli 2021</p>
            </div>
          </button>
          <button className="date-button col-md-2" onClick={() => onClickHandler('09:30, 14 juli 2021')}>
            <div className={`date-card ${activeDate === '09:30, 14 juli 2021' ? 'active' : ''}`}>
              <p><span>09:30 uur</span></p>
              <p>14 juli 2021</p>
            </div>
          </button>
          <button className="date-button col-md-2" onClick={() => onClickHandler('11:30, 15 juli 2021')}>
            <div className={`date-card ${activeDate === '11:30, 15 juli 2021' ? 'active' : ''}`}>
              <p><span>11:30 uur</span></p>
              <p>15 juli 2021</p>
            </div>
          </button>
        </div>
        
        {validationMessage ? <p className="validation-message">Vergeet niet een datum te selecteren...</p> : '' }

        <div className="row">
          <div className="col-md-12">
            <div className="overview">
              { meetings 
                ? 
                <div className="open-meetings">
                  <p>Mijn Meetings:</p>
                  <Link to='/fcg-nfig-fpy'>
                    <button>{meetings}</button>
                  </Link>
                </div>
                : 'U heeft nog geen meetings ingepland...'
              }
            </div>
          </div>
        </div>

        <button onClick={() => onSubmit()} type="button" className="btn btn-success">Plan een nieuwe meeting</button>
    
        {/* <button onClick={() => {props.videoCall(true)}} type="button" className="btn btn-secondary">Go to meeting</button> */}
      </div>
    </div>
  );
}

export default SchedulePage;
