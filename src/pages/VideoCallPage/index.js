import './VideoCallPage.css';
import { useState } from 'react';
import {
    useParams
  } from "react-router-dom";
  
import Collapsible from 'react-collapsible';


function VideoCallPage() {
    const [joined, setJoined] = useState(false);
    const [planner, setPlanner] = useState(false);
    let { videoId } = useParams();

    function planMeeting() {
        // open meeting planner for gemeente
        setPlanner(true)
    }

    return (
        <div className="call">
            <div className="container">
                <h1>Video call</h1>
                {joined ? 
                    <div className='in-call'>
                        <img className='video' src="/images/man.jpg" alt="person"/><br/>
                        <button onClick={() => setJoined(false)} type="button" className="btn btn-danger">Leave Call</button>
                    </div>
                : <button onClick={() => setJoined(true)} type="button" className="btn btn-success">Join Call</button>}
                {joined ? 
                    <div className="affairs">
                        <Collapsible trigger="Click this and see the magic!">
                            <p>
                                This is the collapsible content. It can be any element or React
                                component you like.
                            </p>
                            <p>
                                It can even be another Collapsible component. Check out the next
                                section!
                            </p>
                        </Collapsible>
                        <Collapsible trigger="Click this and see the magic!">
                            <p>
                                This is the collapsible content. It can be any element or React
                                component you like.
                            </p>
                            <p>
                                It can even be another Collapsible component. Check out the next
                                section!
                            </p>
                        </Collapsible>
                        <Collapsible trigger="Click this and see the magic!">
                            <p>
                                This is the collapsible content. It can be any element or React
                                component you like.
                            </p>
                            <p>
                                It can even be another Collapsible component. Check out the next
                                section!
                            </p>
                        </Collapsible>
                    </div> : ''
                }
            <br/><button onClick={() => {planMeeting()}} type="button" className="btn btn-success">Plan meeting met gemeente</button>
            {planner
                ? <div>
                    Let's plan a meeting!
                </div>
                : ''
            }
            </div>
        </div>
    );
}

export default VideoCallPage;
