import React, {useState} from 'react';
import {View} from 'react-native';

import {
  BodyText,
  ButtonIcon,
  ButtonPrimary,
  CustomInput,
  CustomSelect,
  Divider,
  LayoutScreen,
  LayoutScroll,
  Precautions,
} from '../../components';
import styled from 'styled-components/native';
import {IconSwap} from '../../assets/icons';
import {neutral100, primary} from '../../constants/colors';
const SwapBTCScreen = () => {
  const [quantity, setQuantity] = useState(0);
  const [errorQuantity, setErrorQuantity] = useState(false);
  const [selectValue, setSelectValue] = useState('BTC');
  const [selectConvert, setSelectConvert] = useState('USDT');

  const selectData = [
    {label: 'BTC', value: 'BTC'},
    {label: 'USDT', value: 'USDT'},
  ];

  return (
    <LayoutScreen>
      <LayoutScroll>
        <Wrapper>
          <Container>
            <View>
              <View style={{marginBottom: 10}}>
                <BodyText type={5}>Use</BodyText>
              </View>
              <CustomSelect
                bordered
                value={selectValue}
                data={selectData}
                onChange={item => setSelectValue(item.value)}
                selectStyle={{top: 0, paddingBottom: 13, width: 80}}
              />
            </View>
            <InputSection>
              <View style={{alignSelf: 'flex-end', marginBottom: 10}}>
                <BodyText type={5}>Balance 30.01</BodyText>
              </View>
              <CustomInput
                value={quantity}
                onChange={event => handleChangeQuantity(event)}
                placeholder="Quantity"
                keyboardType="numeric"
                onPress
                btnText="Max"
                action
                textAlign="right"
                error={errorQuantity}
              />
              <SwapButtonWithLine>
                <Line />
                <ButtonIcon
                  borderColor={neutral100}
                  icon={<IconSwap />}
                  onPress={() =>
                    navigation.navigate(ROUTES.WALLET.BTC_SWAP, {item})
                  }
                />
                <Line />
              </SwapButtonWithLine>
            </InputSection>
          </Container>

          <Container>
            <View>
              <View style={{marginBottom: 10}}>
                <BodyText type={5}>Convert to</BodyText>
              </View>
              <View>
                <CustomSelect
                  bordered
                  value={selectConvert}
                  data={selectData}
                  onChange={item => setSelectConvert(item.value)}
                  selectStyle={{top: 0, paddingBottom: 13, width: 80}}
                />
              </View>
            </View>
            <InputSection>
              <View style={{marginBottom: 10}}>
                <BodyText type={5}></BodyText>
              </View>
              <CustomInput
                value={quantity}
                onChange={event => handleChangeQuantity(event)}
                placeholder="10,000"
                keyboardType="numeric"
                btnText="Max"
                action
                textAlign="right"
                error={errorQuantity}
              />
            </InputSection>
          </Container>

          <View style={{marginTop: 30, marginBottom: 20}}>
            <Divider></Divider>
          </View>

          <RateContent>
            <View>
              <BodyText type={5}>Exchange Rate </BodyText>
              <BodyText type={5}>Fee Rate</BodyText>
            </View>
            <View>
              <BodyText type={5}>1 BTC ≈ 19,302 USDT</BodyText>
              <BodyText type={5}>0.5%</BodyText>
            </View>
          </RateContent>

          <Precautions />

          <ButtonContainer>
            <ButtonPrimary
              title="Exchange"
              onPress={() => navigation.navigate(ROUTES.ACTION.ACTION_SCREEN)}
            />
          </ButtonContainer>
        </Wrapper>
      </LayoutScroll>
    </LayoutScreen>
  );
};
const Container = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

const Line = styled.View`
  background-color: ${primary};
  height: 1px;
  flex: 1;
`;

const ButtonContainer = styled.View`
  align-items: center;
  margin-bottom: 37px;
  margin-top: 50px;
`;

const TopSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
`;

const InputSection = styled.View`
  flex: 4;
`;

const SwapButtonWithLine = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const RateContent = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-bottom: 101px;
  margin-left: 7px;
  margin-right: 7px;
`;

const Wrapper = styled.View`
  justify-content: space-around;
  flex: 1;
  padding: 16px;
  position: relative;
`;

export default SwapBTCScreen;
