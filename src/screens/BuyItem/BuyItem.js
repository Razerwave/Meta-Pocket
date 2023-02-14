import React, {useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {
  AppStatusBar,
  BodyHeading,
  BodyText,
  ButtonPrimary,
  LayoutScreen,
  LayoutScroll,
  Stack,
  StyledText,
} from '../../components';
import {useTheme} from 'styled-components';
import {neutral300, white} from '../../constants/colors';

const BuyItem = ({route}) => {
  const {fontColor} = useTheme();
  const item = route.params.item;

  return (
    <LayoutScreen>
      <AppStatusBar barColor={neutral300} barStyle="light-content" />
      <LayoutScroll>
        <Stack
          padding={16}
          style={{
            backgroundColor: neutral300,
            marginBottom: 31,
          }}>
          <Stack style={{alignItems: 'center'}}>
            <Image style={{width: 160, height: 160}} source={item.image} />
            <BodyHeading
              type={5}
              style={{marginTop: 20, marginBottom: 10, color: white}}>
              {item.name}
            </BodyHeading>
            <BodyText type={3} style={{marginBottom: 33}}>
              {item.author}
            </BodyText>
          </Stack>
        </Stack>
        <Container>
          <DividerDotted />
          <Section>
            <Content>
              <BodyText type={6}>Name</BodyText>
              <BodyText type={4}>Shoes #748</BodyText>
            </Content>
            <Content>
              <BodyText type={6}>From</BodyText>
              <BodyText type={4}>0xe34lkjds....7BEsdlkfjls</BodyText>
            </Content>
            <Content>
              <BodyText type={6}>To</BodyText>
              <BodyText type={4}>0x333lksdf..sdflEDFWe</BodyText>
            </Content>
          </Section>
          <DividerDotted />
          <Section>
            <Content>
              <BodyText type={6}>Fee</BodyText>
              <BodyText type={4}>0.0001 BTC (≈$0.1)</BodyText>
            </Content>
          </Section>
          <DividerDotted />
          <Section>
            <Content>
              <BodyText type={6}>Total</BodyText>
              <BodyText type={4}>$200.1</BodyText>
            </Content>
          </Section>
          <DividerDotted />
        </Container>
        <ButtonContainer>
          <ButtonPrimary title="Buy" />
        </ButtonContainer>
      </LayoutScroll>
    </LayoutScreen>
  );
};
const DividerDotted = styled.View`
  border-color: ${white};
  border-style: dashed;
  border-width: 0.8px;
  margin-left: 41px;
  margin-right: 41px;
`;

const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 56px;
`;

const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Section = styled.View`
  margin-left: 41px;
  margin-right: 41px;
  gap: 20px;
  padding-left: 7px;
  padding-right: 7px;
  justify-content: center;
`;

const Container = styled.View`
  gap: 20px;
  height: auto;
`;
export default BuyItem;
