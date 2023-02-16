import {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useAuth} from '../../context/AuthContext';
import Animated, {FadeInUp, CurvedTransition} from 'react-native-reanimated';
import styled from 'styled-components/native';
import {useTheme} from 'styled-components';
import BodyText from '../texts/BodyText';
import {IconArrowDown} from '../../assets/icons';
import {neutral100, black} from '../../constants/colors';

const CustomSelect = ({
  value,
  data,
  onChange,
  bordered,
  textStyle,
  selectStyle,
  selectedWrapperStyle,
}) => {
  const [selectedItem, setSelectedItem] = useState({});
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const {setMainPressEvent, isDarkTheme} = useAuth();
  const {input, activeTintColor} = useTheme();

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        handleOnChange(item);
        setDropdownVisible(false);
      }}
      key={index}>
      <View style={{paddingTop: 15}}>
        <BodyText type={5} style={textStyle}>
          {item.label}
        </BodyText>
      </View>
    </TouchableOpacity>
  );

  const findSelectedItem = selected => {
    try {
      const selectedItem = data.find(item => item.value === selected);
      if (selectedItem) {
        return selectedItem;
      }

      return {};
    } catch (ex) {
      console.log(ex);
      return {};
    }
  };

  const handleOnChange = item => {
    if (onChange) {
      onChange(item);
    }
    setSelectedItem(item);
  };

  useEffect(() => {
    if (value) {
      setSelectedItem(findSelectedItem(value));
    } else {
      setSelectedItem({});
    }
  }, [value]);

  useEffect(() => {
    if (dropdownVisible) {
      setMainPressEvent({event: () => setDropdownVisible(false)});
    } else {
    }
  }, [dropdownVisible]);

  return (
    <Wrapper>
      <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
        <SelectWrapper
          layout={CurvedTransition.duration(100)}
          dropdownVisible={dropdownVisible}
          bordered={bordered}
          bgColor={input.backgroundColor}
          borderColor={input.borderColor}
          textColor={activeTintColor}
          style={selectStyle}>
          <View
            style={[
              {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
              selectedWrapperStyle,
            ]}>
            <BodyText type={5} style={{justifyContent: 'center', ...textStyle}}>
              {dropdownVisible
                ? selectedItem.label
                : selectedItem.selectedLabel
                ? selectedItem.selectedLabel
                : selectedItem.label}
            </BodyText>
            <View style={{paddingTop: 4, marginLeft: 6}}>
              <IconArrowDown color={isDarkTheme ? neutral100 : black} />
            </View>
          </View>
          {dropdownVisible && (
            <Animated.View entering={FadeInUp}>
              {data.map((item, index) => {
                if (item.value === selectedItem.value) {
                  return null;
                }
                return renderItem({item, index});
              })}
            </Animated.View>
          )}
        </SelectWrapper>
      </TouchableOpacity>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  position: relative;
  background-color: 'red';
  flex: 1;
`;

const SelectWrapper = styled(Animated.View)`
  position: absolute;
  right: 0;
  top: -15px;
  background-color: ${props =>
    props.dropdownVisible
      ? props.bgColor
      : props.bordered
      ? props.bgColor
      : 'transparent'};
  border: ${props =>
    props.bordered ? `solid 1px ${props.borderColor}` : 'none'};
  border-radius: 4px;
  z-index: 999;
  padding: 15px;
`;

export default CustomSelect;
