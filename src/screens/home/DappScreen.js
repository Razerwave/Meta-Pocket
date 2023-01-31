import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CardBox, HomeScreen, Screen, Stack, StyledText} from '../../components';
import {useTheme} from 'styled-components';

const DappScreen = () => {
  const {fontColor, activeTintColor} = useTheme();

  return (
    <HomeScreen>
      <Stack spacing={16} padding={16}>
        <Tabs fontColor={fontColor} activeTintColor={activeTintColor} />
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <ListItem key={index} fontColor={fontColor} />
        ))}
      </Stack>
    </HomeScreen>
  );
};

const Tabs = ({fontColor, activeTintColor}) => {
  const [tab, setTab] = useState(0);
  return (
    <Stack direction="row" spacing={8}>
      {['All', 'Popular', 'Mining'].map((text, index) => {
        const isActive = tab === index;
        return (
          <TouchableOpacity key={index} onPress={() => setTab(index)}>
            <View
              style={[
                {paddingHorizontal: 12, borderColor: fontColor},
                isActive && {
                  borderBottomWidth: 3,
                  borderBottomColor: activeTintColor,
                },
              ]}>
              <StyledText style={[{fontWeight: 'bold'}]}>{text}</StyledText>
            </View>
          </TouchableOpacity>
        );
      })}
    </Stack>
  );
};

const ListItem = ({fontColor}) => {
  return (
    <View style={{flexDirection: 'row', gap: 16}}>
      <View
        style={{
          height: 40,
          width: 40,
          borderWidth: 1,
          borderColor: fontColor,
        }}></View>
      <Stack style={{flex: 1}}>
        <Stack direction="row" style={{borderWidth: 1, borderColor: 'gray'}}>
          <StyledText style={{fontWeight: 'bold', paddingHorizontal: 8}}>
            Subject
          </StyledText>
        </Stack>

        <Stack>
          <StyledText
            style={{borderWidth: 1, borderColor: 'gray', paddingHorizontal: 8}}>
            Description
          </StyledText>
        </Stack>
      </Stack>
    </View>
  );
};

export default DappScreen;
