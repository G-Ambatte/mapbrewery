import './display.css'

import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useStorage';


export default function DisplayComponent({imageURL, eventDisplaySettings }){

    const eventId = 1;

    const [mouseTrack, setMouseTrack] = useState(false);
    const [eventX, setEventX] = useLocalStorage(`event-locX-${eventId}`, 0);
    const [eventY, setEventY] = useLocalStorage(`event-locY-${eventId}`, 0);
   
    function endDrag(e){
        setMouseTrack(false);
        console.log(e);
        setEventX(e.clientX / e.target.clientWidth);
        setEventY(e.clientY / e.target.clientHeight);
    }

    const locationColor = mouseTrack ? 'white' : 'black';

    return <div className='display' style={{ '--imageSrc': `url(${imageURL}`, ...eventDisplaySettings }} onDragOver={(e)=>{e.preventDefault()}} onDrop={endDrag}>
        {/* Locations Toolbar */}
        <div className='toolbar'>
        <span
            className='icon interactive fa-solid fa-location-crosshairs'
            style={{ color: locationColor }}
            draggable={true}
            onDragStart={()=>{setMouseTrack(true)}}
            onContextMenu={(e)=>{e.preventDefault(); return false;}}
            onMouseDown={(e)=>{if(e.button != 0){ setEventX(0); setEventY(0); } }}
        >
        </span>
        <span>X: {(eventX * 100).toFixed(2)}%</span>
        <span>Y: {(eventY * 100).toFixed(2)}%</span>
        <span className='icon interactive fa-solid fa-add' onClick={()=>{alert(1);}}></span>
        </div>
    </div>;
};