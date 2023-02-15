import React, {Children} from 'react';
import ButtonPrimary from './buttons/ButtonPrimary';
import LayoutScreen from './layouts/LayoutScreen';
import LayoutScroll from './layouts/LayoutScroll';
import styled from 'styled-components/native';
import {black, neutral100, neutral300, white} from '../constants/colors';
import BodyHeading from './texts/BodyHeading';
import BodyText from './texts/BodyText';
import {View, Image} from 'react-native';
import FixedThemeWrapper from './theme/FixedThemeWrapper';
import Stack from './Stack';

const ActionInfoBorder = ({Children}) => {
  return (
    <LayoutScreen>
      <FixedThemeWrapper
        style={{
          marginHorizontal: 18,
          flex: 1,
        }}>
        <Container
          style={{
            flex: 1,
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderColor: 'black',
          }}>
          <Stack style={{alignItems: 'center'}}>
            <BodyHeading type={7}>0.3 BTC</BodyHeading>
            <BodyText type={3}>≈ $12,345</BodyText>
          </Stack>
          <View style={{gap: 30, justifyContent: 'space-around'}}>
            <Section>
              <DividerDotted />
              {/* <Content>
                <BodyText type={6}>Name</BodyText>
                <BodyText type={4}>Shoes #748</BodyText>
              </Content> */}
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
          </View>
        </Container>
      </FixedThemeWrapper>
      <ButtonContainer>
        <ButtonPrimary title="Buy" />
      </ButtonContainer>
    </LayoutScreen>
  );
};
const DividerDotted = styled.View`
  border-color: ${neutral100};
  border-style: dashed;
  border-width: 0.8px;
  flex: 1;
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
  gap: 20px;
  padding-left: 7px;
  padding-right: 7px;
  justify-content: center;
`;

const Container = styled.View`
  gap: 30px;
  height: auto;
  margin-left: 23px;
  margin-right: 23px;
  justify-content: space-around;
`;
export default ActionInfoBorder;
