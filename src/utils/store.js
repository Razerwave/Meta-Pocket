import AsyncStorage from '@react-native-async-storage/async-storage';

const store = {
  getItem: async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error(e)
      return null;
    }
  },
  setItem: async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      console.error(e)
    }
  },
  removeItem: async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch (e) {
      console.error(e)
    }
  },
}

export default store