import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {
  ActionInfoBorder,
  BodyHeading,
  BodyText,
  ButtonPrimary,
  LayoutScreen,
  Stack,
} from '../../components';
import {neutral100} from '../../constants/colors';
import {ROUTES} from '../../constants';
const BTCHistoryScreen = ({route, navigation}) => {
  const item = route.params.item;
  const btc = route.params.data;
  console.log(btc);

  const Capitalize = str => {
    console.log(str);
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    navigation.setOptions({title: `${item.type} Money`});
    Capitalize(item.type);
  }, [item.type]);

  return (
    <LayoutScreen>
      <Container>
        <ActionInfoBorder style={{flex: 0.8, justifyContent: 'space-evenly'}}>
          <Stack
            direction="row"
            spacing={27}
            style={{justifyContent: 'center'}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 10,
                }}>
                <Image source={btc.image} style={{width: 30, height: 30}} />
                <BodyHeading type={7}>
                  {item.amount} <BodyText type={3}>BTC</BodyText>
                </BodyHeading>
              </View>
              <BodyText
                color={neutral100}
                type={3}
                style={{alignSelf: 'center'}}>
                ≈ $12,345
              </BodyText>
            </View>
          </Stack>
          <Wrapper>
            <View style={{gap: 30, justifyContent: 'space-around'}}>
              <Section>
                <DividerDotted />
                <View style={{gap: 10}}>
                  <Content>
                    <BodyText type={6}>From</BodyText>
                    <BodyText type={4}>0xe34lkjds....7BEsdlkfjls</BodyText>
                  </Content>
                  <Content>
                    <BodyText type={6}>To</BodyText>
                    <BodyText type={4}>0x333lksdf..sdflEDFWe</BodyText>
                  </Content>
                </View>
                <DividerDotted />
              </Section>

              <Section>
                <Content>
                  <BodyText type={6}>Fee</BodyText>
                  <BodyText type={4}>0.0001 BTC (≈$0.1)</BodyText>
                </Content>
              </Section>

              <Section>
                <DividerDotted />
                <Content>
                  <BodyText type={6}>Total</BodyText>
                  <BodyText type={4}>$200.1</BodyText>
                </Content>
              </Section>
            </View>
          </Wrapper>
        </ActionInfoBorder>
        <ButtonContainer>
          <ButtonPrimary
            title="Send"
            onPress={() => navigation.navigate(ROUTES.ACTION.ACTION_SCREEN)}
          />
        </ButtonContainer>
      </Container>
    </LayoutScreen>
  );
};

const ButtonContainer = styled.View`
  align-items: center;
  margin-bottom: 37px;
`;

const Container = styled.View`
  height: auto;
  margin-left: 23px;
  margin-right: 23px;
  justify-content: space-around;
  flex: 1;
`;

const Wrapper = styled.View`
  gap: 18px;
`;

const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 7px;
  padding-right: 7px;
`;

const Section = styled.View`
  gap: 20px;
  padding-left: 23px;
  padding-right: 23px;
  justify-content: center;
`;

const DividerDotted = styled.View`
  border-color: ${neutral100};
  border-style: dashed;
  border-width: 1px;
  flex: 1;
`;

export default BTCHistoryScreen;
