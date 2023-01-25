import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";


const useAsyncStorage = (key, initialValue) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const getStored = async (key, initialValue) => {
            try {
                const item = await AsyncStorage.getItem(key);
                if (item) {
                    setValue(JSON.parse(item));
                } else {
                    setValue(initialValue);
                    await AsyncStorage.setItem(key, JSON.stringify(initialValue));
                }
            } catch (error) {
                console.log(error);
            }
        }

        getStored(key, initialValue);
    }, [key, initialValue]);

    const setStored = async (_value) => {
        try {
            const newValue = _value instanceof Function ? value(value) : _value;
            setValue(newValue);
            await AsyncStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.log(error);
        }
    };

    return [value, setStored];
}

export default useAsyncStorage