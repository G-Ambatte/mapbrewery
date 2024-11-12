import './eventConfig.css'

import { useState } from 'react'

export default function EventConfig({children}) {

    const [configState, setConfigState] = useState(false);
    const [eventId, setEventId] = useState(1);

    function toggleConfigState() {
        setConfigState(!configState);
    };

    function decId() {
        if(eventId > 1) setEventId(eventId - 1);
    }
    function incId() {
        setEventId(eventId + 1);
    }

    return <>
        <div className={`eventConfig ${configState ? 'active' : 'inactive'}`}>
            <div className='opener' onClick={()=>toggleConfigState()}>
                {configState ? '>' : '<'}
            </div>
            <h3>Event Configuration</h3>
            <div className='eventControls'>
                <span className='interactive icon' onClick={decId}>{'<'}</span>
                <span>{`Event ${eventId}`}</span>
                <span className='interactive icon' onClick={incId}>{'>'}</span>
            </div>
            {children}
        </div>
    </>
}
