import { useEffect } from 'react'
import { useLocalStorage } from '../../hooks/useStorage';

export default function ColorPicker({defaultColor, storageKey, children, passValue}) {
    const [color, setColor] = useLocalStorage(storageKey, defaultColor);

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
