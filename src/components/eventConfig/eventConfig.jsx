import './eventConfig.css'

import { useState } from 'react'

export default function EventConfig({children}) {

    const [configState, setConfigState] = useState(false);

    function toggleConfigState() {
        setConfigState(!configState);
    };

    return <>
        <div className={`eventConfig ${configState ? 'active' : 'inactive'}`}>
            <div className='opener' onClick={()=>toggleConfigState()}>
                {configState ? '>' : '<'}
            </div>
            {children}
        </div>
    </>
}
