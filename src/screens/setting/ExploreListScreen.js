import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {CardBox, HomeScreen, Screen, Stack, StyledText} from '../../components';
import {useTheme} from 'styled-components';
import IonIcon from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-webview';

const ExploreListScreen = ({navigation, route}) => {
  const {fontColor, activeTintColor} = useTheme();
  const data = route.params.data;
  const title = route.params.title;
  const [visible, setVisible] = useState(false);
  const WEB_LINK = 'https://www.youtube.com/';

  useEffect(() => {
    navigation.setOptions({title: title});
  }, []);

  return (
    <HomeScreen>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Stack
            direction="row"
            style={{
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 10,
            }}>
            <StyledText>
              {/* <IonIcon
                      name="arrow-back"
                      size={19}
                      color={fontColor}
                    /> */}
            </StyledText>
            <StyledText>
              <IonIcon name="close-outline" size={19} color={fontColor} />
            </StyledText>
          </Stack>
        </TouchableOpacity>
        <WebView source={{uri: WEB_LINK}} />
      </Modal>

      <Stack spacing={16} padding={16}>
        {data.map(index => (
          <TouchableOpacity
            onPress={() => setVisible(true)}
            key={index.Subject}
            fontColor={fontColor}
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
                  {index.Subject}
                </StyledText>
              </Stack>

              <Stack>
                <StyledText
                  style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    paddingHorizontal: 8,
                  }}>
                  {index.Description}
                </StyledText>
              </Stack>
            </Stack>
          </TouchableOpacity>
        ))}
      </Stack>
    </HomeScreen>
  );
};

export default ExploreListScreen;
