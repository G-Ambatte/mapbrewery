import './display.css'

export default function DisplayComponent({imageURL, eventDisplaySettings }){
    return <div className={'display'} style={{ '--imageSrc': `url(${imageURL}`, ...eventDisplaySettings }}></div>;
};