import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {CardBox, HomeScreen, Screen, Stack, StyledText} from '../../components';
import {useTheme} from 'styled-components';
import { ROUTES } from '../../constants';

const DappScreen = ({navigation}) => {
  const {fontColor, primaryColor} = useTheme();
  const WEB_LINK = 'https://www.youtube.com/';

  return (
    <HomeScreen>
      <Stack spacing={16} padding={16}>
        <Tabs fontColor={fontColor} primaryColor={primaryColor} />
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <TouchableOpacity
            key={index}
            fontColor={fontColor}
            onPress={() => navigation.navigate(ROUTES.EXPLORE.WEB, { uri: WEB_LINK })}
            style={{flexDirection: 'row', gap: 16}}>
            <View
              style={{
                height: 40,
                width: 40,
                borderWidth: 1,
                borderColor: fontColor,
              }}></View>
            <Stack style={{flex: 1}}>
              <Stack
                direction="row"
                style={{borderWidth: 1, borderColor: 'gray'}}>
                <StyledText style={{fontWeight: 'bold', paddingHorizontal: 8}}>
                  Subject
                </StyledText>
              </Stack>

              <Stack>
                <StyledText
                  style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    paddingHorizontal: 8,
                  }}>
                  Description
                </StyledText>
              </Stack>
            </Stack>
          </TouchableOpacity>
        ))}
      </Stack>
    </HomeScreen>
  );
};

const Tabs = ({fontColor, primaryColor}) => {
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
                  borderBottomColor: primaryColor,
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

export default DappScreen;
