import {TouchableOpacity} from 'react-native';
import {useAuth} from '../context/AuthContext';

const CustomTouchableOpacity = ({children, onPress, ...props}) => {
  const {mainOnPressEvent} = useAuth();

  const handleOnPress = () => {
    if (mainOnPressEvent) {
      try {
        mainOnPressEvent();
      } catch (ex) {
        console.log(
          'Main press event exception from <CustomTouchableOpacity/>',
        );
      }
    }
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity onPress={handleOnPress} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacity;
