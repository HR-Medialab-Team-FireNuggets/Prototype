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

    function onClickHandler() {
        // join video call  

        // for now we will show the stuff that needs to be taken care of
        setJoined(true)
    }

    function planMeeting() {
        // open meeting planner for gemeente
        setPlanner(true)
    }

    return (
        <div className="call">
            <div className="container">
                <h1>Here we have a video call</h1>
                <button onClick={() => {onClickHandler()}} type="button" className="btn btn-primary">Join Call</button>
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
            <button onClick={() => {planMeeting()}} type="button" className="btn btn-primary">Plan meeting met gemeente</button>
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
