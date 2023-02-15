import React, { useState } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import {
  AppStatusBar,
  BodyHeading,
  BodyText,
  ButtonPrimary,
  FixedThemeWrapper,
  LayoutHeader,
  LayoutScreen,
  LayoutScroll,
  Stack,
  StyledText,
} from '../../components';
import { useTheme } from 'styled-components';
import { neutral100, neutral300, white } from '../../constants/colors';
import { DarkTheme } from '../../constants';

const BuyItem = ({ route }) => {
  const { statusBarStyle, fontColor } = DarkTheme
  const item = route.params.item;

  return (
    <LayoutScreen statusBar={{ backgroundColor: neutral300, colorStyle: statusBarStyle }}>
      <LayoutScroll>
        <FixedThemeWrapper dark style={{ backgroundColor: neutral300 }}>
          <LayoutHeader
            title="Buy Item"
            headerStyle={{ backgroundColor: neutral300 }}
            headerTitleStyle={{ color: fontColor }}
          />
          <Stack alignItems="center" marginTop={14} marginBottom={33} style={{ backgroundColor: neutral300 }}>
            <Image style={{ width: 160, height: 160 }} source={item.image} />
            <BodyHeading type={5} style={{ marginTop: 20, color: white }}>
              {item.title}
            </BodyHeading>
            <BodyText type={3} style={{ marginTop: 10, color: neutral100 }}>
              {item.description}
            </BodyText>
          </Stack>
        </FixedThemeWrapper>
        <Stack spacing={20} marginTop={31}>
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
        </Stack>
        <ButtonContainer>
          <ButtonPrimary title="Buy" />
        </ButtonContainer>
      </LayoutScroll>
    </LayoutScreen>
  );
};
const DividerDotted = styled.View`
  border-color: ${props => props.theme.dividerColor};
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

export default BuyItem;
