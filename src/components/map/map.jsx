import "./map.css"
import { useState } from "react"

import DisplayComponent from "../display/display";

import MapConfig from "../mapConfig/mapConfig";
import EventConfig from "../eventConfig/eventConfig";

import InputComponent from "../input/input"
import ColorPicker from "../colorPicker/colorPicker";

export default function MapComponent(){
    const [mapURL, setMapURL] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('#666666');
    const [eventDisplaySettings] = useState({ backgroundPosition: '50% 50%', transform: 'scale(1.0)' });
    
    return <div className="map" style={{backgroundColor: backgroundColor}}>
        <DisplayComponent imageURL={mapURL} eventDisplaySettings={eventDisplaySettings}></DisplayComponent>
        <MapConfig>
            <h3>Map Configuration</h3>
            <InputComponent storageKey='map' passValue={setMapURL}>Map URL: </InputComponent>
            <ColorPicker defaultColor={backgroundColor} passValue={setBackgroundColor}>Background Color:</ColorPicker>
        </MapConfig>
        <EventConfig>
            <h3>Event Configuration</h3>
        </EventConfig>
    </div>
}