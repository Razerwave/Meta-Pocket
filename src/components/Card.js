import React from 'react';
import {View, Image} from 'react-native';
import styled from 'styled-components/native';
import {IconDappArrow} from '../assets/icons';
import {neutral100, neutral300} from '../constants/colors';
import BodyText from './texts/BodyText';

const Card = ({item, onPress}) => {
  console.log(item);
  return (
    <View>
      {item.image ? (
        <View>
          <AllTabTouchableOpacity onPress={item => onPress(item)}>
            <View>
              <ArtDCard>
                <Image source={item.image} />
              </ArtDCard>
              <FavoriteSection>
                <SetArtFavorite>
                  <Image
                    source={
                      item.star
                        ? require('../assets/icons/Vector.png')
                        : require('../assets/icons/favorite.png')
                    }
                    style={{width: 14, height: 14}}
                  />
                </SetArtFavorite>
              </FavoriteSection>
            </View>
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
      ) : (
        <View gap={10}>
          <AllTabTouchableOpacity onPress={item => onPress(item)}>
            <DCard>
              <ArrowIcon>
                <IconDappArrow />
              </ArrowIcon>
              <ImageContainer>
                <Image source={item.logo} />
              </ImageContainer>
            </DCard>
          </AllTabTouchableOpacity>

          <DescriptionContainer>
            <BodyText type={8}>{item.title}</BodyText>
            <BodyText type={7} style={{color: neutral100, marginTop: 6}}>
              {item.description}
            </BodyText>
          </DescriptionContainer>
        </View>
      )}
    </View>
  );
};

const AllTabTouchableOpacity = styled.TouchableOpacity`
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

const DCard = styled.View`
  flex: 1;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-self: flex-end;
`;

const ArtDCard = styled.View`
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

const FavoriteSection = styled.View`
  justify-content: flex-end;
  flex-direction: row;
`;

const SetArtFavorite = styled.TouchableOpacity`
  /* align-self: flex-end; */
  margin-bottom: 10px;
  margin-right: 10px;
`;

export default Card;
