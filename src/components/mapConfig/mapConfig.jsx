import './mapConfig.css'

import { useState } from 'react'

export default function MapConfig({active, children}) {

    const [configState, setConfigState] = useState(active); 

    function toggleConfigState() {
        setConfigState(!configState);
    };

    return <>
        <div className={`mapConfig ${configState ? 'active' : 'inactive'}`}>
            <div className='opener' onClick={()=>toggleConfigState()}>
                {configState ? '<' : '>'}
            </div>
            {children}
        </div>
    </>
}
