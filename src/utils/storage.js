import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";


const useAsyncStorage = (key, initialValue) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const getStored = async (key, initialValue) => {
            try {
                const item = await AsyncStorage.getItem(key);
                setValue(item ? JSON.parse(item) : initialValue);
            } catch (error) {
                console.log(error);
            }
        }

        getStored(key, initialValue);
    }, [key, initialValue]);

    const setStored = async (value) => {
        try {
            setValue(value);
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    return [value, setStored];
}

export default useAsyncStorage