import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-webview';
import {CardBox, Screen, Stack, StyledText} from '../../components';
import {useTheme} from 'styled-components';
import {ROUTES} from '../../constants';

const ExploreListScreen = ({navigation, route}) => {
  const {fontColor} = useTheme();
  const data = route.params.data;
  const title = route.params.title;
  const [visible, setVisible] = useState(false);
  const WEB_LINK = 'https://www.youtube.com/';
    useEffect(() => {
        navigation.setOptions({title: title})
    }, [])
  return (
    <Screen>
      <Stack spacing={32}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onDismiss={() => {
            setVisible(!visible);
          }}>
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Text style={{marginBottom: 30}}></Text>
          </TouchableOpacity>
          <WebView source={{uri: WEB_LINK}} />
        </Modal>

        <CardBox>
          <TitleAndArrow>
            <IonIcon
              name="arrow-back"
              size={25}
              color={fontColor}
            />
            <StyledText style={{fontSize: 20, fontWeight: 'bold'}}>
              {title}
            </StyledText>
          </TitleAndArrow>
        </CardBox>

        {data.map(item => (
          <TouchableOpacity key={item.Subject} onPress={() => setVisible(true)}>
            <Stack style={{height: 100}}>
              <Stack direction="row" style={{flex: 1}}>
                <CardBox>
                  <Stack>
                    <StyledText>Zurag</StyledText>
                  </Stack>
                </CardBox>

                <Stack style={{flex: 1}}>
                  <Stack>
                    <CardBox style={{height: 50}}>
                      <StyledText>{item.Subject}</StyledText>
                    </CardBox>
                    <CardBox style={{height: 50}}>
                      <StyledText>{item.Description}</StyledText>
                    </CardBox>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </TouchableOpacity>
        ))}
      </Stack>
    </Screen>
  );
};

const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-around;
`;

const Wrapper = styled.View`
  flex: 1;
  background-color: '#808000';
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

const ModalView = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;

const TitleAndArrow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
`;

export default ExploreListScreen;
