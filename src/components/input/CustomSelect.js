import {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {useAuth} from '../../context/AuthContext';

const CustomSelect = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropDownRef = useRef(null);
  const {setMainPressEvent} = useAuth();

  const data = [
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
  ];

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedValue(item.value);
        setDropdownVisible(false);
      }}
      key={index}>
      <View style={{padding: 10}}>
        <Text>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    if (dropdownVisible) {
      setMainPressEvent({event: () => setDropdownVisible(false)});
    }
  }, [dropdownVisible]);

  return (
    <View
      ref={dropDownRef}
      style={{
        borderWidth: 1,
        borderColor: 'gray',
      }}>
      <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
        <View style={{padding: 10}}>
          <Text>{selectedValue || 'Select an option'}</Text>
        </View>
      </TouchableOpacity>
      {dropdownVisible && (
        <View
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            top: '100%',
            right: 0,
            zIndex: 2,
          }}>
          {data.map((item, index) => {
            return renderItem({item, index});
          })}
        </View>
      )}
    </View>
  );
};

export default CustomSelect;
