import { useState, useEffect } from 'react'

export default function ColorPicker({defaultColor, children, passValue}) {
    const [color, setColor] = useState(defaultColor);

    useEffect(()=>{
        if (typeof passValue === 'function'){
            passValue(color);
        }
    } , [color, passValue]);

    return <div className="colorPicker">
        <label>
            {children}
            <input type='color' onChange={e => setColor(e.target.value)} value={color} />
        </label>
    </div>
}
