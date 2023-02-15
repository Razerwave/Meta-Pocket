import {useEffect} from 'react';
import {TouchableWithoutFeedback} from 'react-native';

function useClickOutside(ref, handler) {
  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    const cleanup = () => {
      // do any cleanup here
    };

    const listener = TouchableWithoutFeedback.addEventListener(
      'press',
      handleClickOutside,
    );

    return () => {
      listener.remove();
      cleanup();
    };
  }, [ref, handler]);

  return (
    <TouchableWithoutFeedback onPress={() => {}}></TouchableWithoutFeedback>
  );
}

export default useClickOutside;
