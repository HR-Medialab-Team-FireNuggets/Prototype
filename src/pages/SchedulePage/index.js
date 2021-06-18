import './SchedulePage.css';
import { useState } from 'react';

function SchedulePage(props) {
  const [selectedDate, setSelectedDate] = useState();
  const [validationMessage, setValidationMessage] = useState(false);
  const [meetings, setMeetings] = useState();

  function onClickHandler(e) {
    setSelectedDate(e)
    setValidationMessage(false)
  }

  const onSubmit = () => {
    if(selectedDate) {
      setValidationMessage(false)
      setMeetings(selectedDate)
    } else {
      setValidationMessage(true)
    }
  }

  function handleMeetingClick() {
    console.log('Open meeting details')
  }

  return (
    <div className="Schedule">
      <div className="container">
        <h1>Meetings</h1>
          <div className="overview">
            {meetings 
              ? 
                <div className="open-meetings">
                  <p>Mijn Meetings:</p>
                  <button onClick={() => handleMeetingClick()}>{meetings}</button>
                </div>
              : 'U heeft nog geen meetings ingepland...'
            }
          </div>
          <br/><br/>
          <h3>Nieuwe meeting inplannen</h3>
          <div className="date-picker">
            <button className="date-button" onClick={() => onClickHandler('11:00, 12 juli 2021')}>
              <div className="date-card">
                <p>11:00 uur</p>
                <p>12 juli 2021</p>
              </div>
            </button>
            <button className="date-button" onClick={() => onClickHandler('14:30, 12 juli 2021')}>
              <div className="date-card">
                <p>14:30 uur</p>
                <p>12 juli 2021</p>
              </div>
            </button>
            <button className="date-button" onClick={() => onClickHandler('10:00, 13 juli 2021')}>
              <div className="date-card">
                <p>10:00 uur</p>
                <p>13 juli 2021</p>
              </div>
            </button>
            <button className="date-button" onClick={() => onClickHandler('09:30, 14 juli 2021')}>
              <div className="date-card">
                <p>09:30 uur</p>
                <p>14 juli 2021</p>
              </div>
            </button>
            <button className="date-button" onClick={() => onClickHandler('11:30, 15 juli 2021')}>
              <div className="date-card__last">
                <p>11:30 uur</p>
                <p>15 juli 2021</p>
              </div>
            </button>
          </div>
          {validationMessage ? <p className="validation-message">Vergeet niet een datum te selecteren...</p> : '' }
          

          <button onClick={() => onSubmit()} type="button" className="btn btn-success">Plan een nieuwe meeting</button>
        
        {/* <button onClick={() => {props.videoCall(true)}} type="button" className="btn btn-secondary">Go to meeting</button> */}
      </div>
    </div>
  );
}

export default SchedulePage;
