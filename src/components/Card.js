import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {IconDappArrow} from '../assets/icons';
import {neutral100, neutral300} from '../constants/colors';
import LayoutScreen from './layouts/LayoutScreen';
import LayoutScroll from './layouts/LayoutScroll';
import BodyText from './texts/BodyText';

const Card = ({data, onPress}) => {
  return (
    <LayoutScreen>
      <LayoutScroll>
        <Container>
          <Content>
            {data.map((item, index) => (
              <View key={index}>
                <TouchableOpacity style={{flex: 1}}></TouchableOpacity>
                <AllTabTouchableOpacity onPress={() => onPress(item)}>
                  <DCard>
                    <ArrowIcon>
                      <IconDappArrow />
                    </ArrowIcon>
                    <ImageContainer style={{marginBottom: 20, marginLeft: 20}}>
                      <Image source={item.image} />
                    </ImageContainer>
                  </DCard>
                </AllTabTouchableOpacity>

                <DescriptionContainer>
                  <BodyText type={8} style={{marginTop: 10, marginBottom: 6}}>
                    {item.title}
                  </BodyText>
                  <BodyText type={7} style={{color: neutral100}}>
                    {item.description}
                  </BodyText>
                </DescriptionContainer>
              </View>
            ))}
          </Content>
        </Container>
      </LayoutScroll>
    </LayoutScreen>
  );
};
const AllTabTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  height: 102px;
  width: 150px;
  background-color: ${neutral300};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 20px;
  flex-direction: row;
  justify-content: space-around;
`;

const Container = styled.View`
  padding: 30px;
  gap: 20px;
  border-top-width: 1px;
  border-color: ${props => props.theme.tabIndicatorColor};
`;

const Content = styled.View`
  gap: 20px;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const DCard = styled.View`
  flex: 1;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-self: flex-end;
`;

const ArrowIcon = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 10px;
  margin-right: 7px;
`;

const ImageContainer = styled.View`
  margin-bottom: 20px;
  margin-left: 20px;
`;

const DescriptionContainer = styled.View`
  align-self: flex-start;
`;

export default Card;
