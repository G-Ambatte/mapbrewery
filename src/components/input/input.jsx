import './input.css';
import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useStorage";

export default function InputComponent({storageKey, children, passValue}){
    const [value, setValue] = useLocalStorage(storageKey, '');

    useEffect(()=>{
        if (typeof passValue === 'function'){
            passValue(value);
        }
    } , [value, passValue]);

    return <label>
        {children}
        <input value={value} onChange={e => setValue(e.target.value)} />
    </label>
}