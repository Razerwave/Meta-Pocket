import React, {useState} from 'react';
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

const ExploreListScreen = () => {
  const [data , setData] = useState([
    {
      id: 1,
      Subject: 'Amaraa',
      Description: '#FF0000',
      Image: require('../../assets/images.jpg'),
    },
    {
      id: 2,
      Subject: 'Tsogoo',
      Description: '#800000',
      Image: require('../../assets/images.jpg'),
    },
    {
      id: 3,
      Subject: 'Bat',
      Description: '#808000',
      Image: require('../../assets/images.jpg'),
    },
  ])
  const [visible, setVisible] = useState(false)
  const WEB_LINK = 'https://www.youtube.com/'


  const showModal = () => {
      setVisible(true)
      console.log("CLICKED");
  };
  const itemRender = ({item, index,}) => {
    return (
    <TouchableOpacity
      onPress={() =>  showModal()}>
      <View>
        <View>
          <Image source={ item.Image} style={{width: 70, height: 70, borderRadius: 10}}/>
        </View>
        <Text>
          {index + 1}: {item.Subject} : {item.Description}
        </Text>
      </View>

      <View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onDismiss={() => {
          setVisible(!visible);
        }}>
          <TouchableOpacity onPress={() => setVisible(!visible)}>
              <Text>Go back</Text>
          </TouchableOpacity>
            <WebView source={{ uri: WEB_LINK }}/>
      </Modal>
      </View>
    </TouchableOpacity>
    )
  }

  return (
        <Container>
            <TouchableButton1>
                <TitleAndArrow>
                  <Text>Title 1</Text>
                  <IonIcon onPress={()=>{console.log("IONC CLICK")}} name="arrow-forward"/>
                </TitleAndArrow>
                <FlatList
                horizontal={true}
                data={data}
                scrollEnabled={false}
                renderItem={ itemRender }
                keyExtractor={data => data.id}
                />
             </TouchableButton1>

        </Container>
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

const StyledText = styled.Text`
  gap: 20px;
  /* padding: 20px 0px; */
  /* margin: 0px 10px; */
`;

const TitleAndArrow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
`;

const TouchableButton1 = styled.TouchableOpacity`
`;

const TouchableButton2 = styled.TouchableOpacity`
`;

const TouchableButton3 = styled.TouchableOpacity`
`;

const StyledImage = styled.Image`

`;
export default ExploreListScreen;
