import { useCallback, useState, useEffect } from 'react';

const PREFIX = 'MAPBREWERY'

export function useLocalStorage(key, defaultValue) {
    return useStorage(key, defaultValue, window.localStorage);
};

export function useSessionStorage(key, defaultValue) {
    return useStorage(key, defaultValue, window.sessionStorage);
};

function useStorage(key, defaultValue, storageObject) {
    const [value, setValue] = useState(()=>{
        const jsonValue = storageObject.getItem(`${PREFIX}-${key}`);
        if(jsonValue) return JSON.parse(jsonValue);

        if(typeof defaultValue === 'function'){
            return defaultValue();
        } else {
            return defaultValue;
        }
    });

    useEffect(()=>{
        if(value === undefined) return storageObject.removeItem(`${PREFIX}-${key}`);
        storageObject.setItem(`${PREFIX}-${key}`, JSON.stringify(value));
    }, [key, value, storageObject]);

    const remove = useCallback(()=>{
        setValue(undefined);
    }, []);

    return [value, setValue, remove];
};