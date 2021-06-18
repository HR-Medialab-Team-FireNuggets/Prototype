import './SchedulePage.css';

function SchedulePage(props) {

  function onClickHandler() {
    // meeting validation

    // add meeting to overview
  }

  return (
    <div className="Schedule">
      <div className="container">
        <h1>Here we schedule a meeting</h1>
        <button onClick={() => {onClickHandler()}} type="button" className="btn btn-primary">Plan meeting</button>
        <button onClick={() => {props.videoCall(true)}} type="button" className="btn btn-secondary">Go to meeting</button>
      </div>
    </div>
  );
}

export default SchedulePage;
