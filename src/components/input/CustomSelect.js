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
  wrapperStyle,
  dropDownStyle,
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
      <View style={{paddingTop: 10}}>
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
    <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
      <Wrapper
        bordered={bordered}
        borderColor={input.borderColor}
        dropdownVisible={dropdownVisible}
        bgColor={input.backgroundColor}>
        <View
          style={[
            {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 10,
            },
            wrapperStyle,
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
      </Wrapper>
      {dropdownVisible && (
        <SelectWrapper
          layout={CurvedTransition.duration(100)}
          dropdownVisible={dropdownVisible}
          bordered={bordered}
          bgColor={input.backgroundColor}
          borderColor={input.borderColor}
          textColor={activeTintColor}
          style={dropDownStyle}>
          {dropdownVisible && (
            <Animated.View entering={FadeInUp}>
              {renderItem({item: selectedItem, index: 1})}
              {data.map((item, index) => {
                if (item.value === selectedItem.value) {
                  return null;
                }
                return renderItem({item, index});
              })}
            </Animated.View>
          )}
        </SelectWrapper>
      )}
    </TouchableOpacity>
  );
};

const Wrapper = styled.View`
  position: relative;
  background-color: ${props =>
    props.bordered
      ? props.dropdownVisible
        ? 'transparent'
        : props.bgColor
      : 'transparent'};
  border: ${props =>
    props.bordered
      ? props.dropdownVisible
        ? 'solid 1px rgba(28, 28, 40, 0)'
        : `solid 1px ${props.borderColor}`
      : 'none'};
  border-radius: 4px;
`;

const SelectWrapper = styled(Animated.View)`
  position: absolute;
  top: 0;
  background-color: ${props =>
    props.dropdownVisible
      ? props.bgColor
      : props.bordered
      ? props.bgColor
      : 'transparent'};
  border: ${props =>
    props.bordered ? `solid 1px ${props.borderColor}` : 'none'};
  border-radius: 4px;
  padding-top: 0;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 22px;
`;

export default CustomSelect;
