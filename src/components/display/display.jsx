import './display.css'

import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useStorage';


export default function DisplayComponent({imageURL, locationDisplaySettings }){

    const locationId = 1;

    const [mouseTrack, setMouseTrack] = useState(false);
    const [locationX, setLocationX] = useLocalStorage(`location-locX-${locationId}`, 0);
    const [locationY, setLocationY] = useLocalStorage(`location-locY-${locationId}`, 0);
   
    function endDrag(e){
        setMouseTrack(false);
        console.log(e);
        setLocationX(e.clientX / e.target.clientWidth);
        setLocationY(e.clientY / e.target.clientHeight);
    }

    function resetLocation(){
        setLocationX(0.5);
        setLocationY(0.5);
    }

    const locationColor = mouseTrack ? 'white' : 'black';

    return <div className='display' style={{ '--imageSrc': `url(${imageURL})`, ...locationDisplaySettings }} onDragOver={(e)=>{e.preventDefault()}} onDrop={endDrag}>
        {/* Locations Toolbar */}
        <div className='toolbar'>
        <span
            className='icon interactive fa-solid fa-location-crosshairs'
            style={{ color: locationColor }}
            draggable={true}
            onDragStart={()=>{setMouseTrack(true)}}
            onContextMenu={(e)=>{e.preventDefault(); return false;}}
            onMouseDown={(e)=>{if(e.button != 0){ resetLocation(); } }}
        >
        </span>
        <span>X: {(locationX * 100).toFixed(2)}%</span>
        <span>Y: {(locationY * 100).toFixed(2)}%</span>
        <span className='icon interactive fa-solid fa-add' onClick={()=>{alert(1);}}></span>
        </div>
    </div>;
};