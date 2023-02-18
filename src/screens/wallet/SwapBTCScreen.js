import React, {useState} from 'react';
import {View} from 'react-native';

import {
  BodyText,
  ButtonIcon,
  ButtonPrimary,
  CustomInput,
  CustomSelect,
  Divider,
  ErrorText,
  LayoutScreen,
  LayoutScroll,
  Precautions,
} from '../../components';
import styled from 'styled-components/native';
import {IconSwap} from '../../assets/icons';
import {neutral100, primary} from '../../constants/colors';
import {useAuth} from '../../context/AuthContext';
const SwapBTCScreen = () => {
  const [quantity, setQuantity] = useState('');
  const [to, setTo] = useState('');
  const [errorQuantity, setErrorQuantity] = useState(false);
  const [error, setError] = useState(false);
  const [selectValue, setSelectValue] = useState('BTC');
  const [selectConvert, setSelectConvert] = useState('USDT');
  const {i18n} = useAuth();
  const selectData = [
    {label: 'BTC', value: 'BTC'},
    {label: 'USDT', value: 'USDT'},
  ];

  let pattern = /[^0-9]/g;
  const balance = 1900;

  const btnMax = v => {
    console.log(balance, ' B');
    setQuantity(balance);
    console.log(quantity);
  };
  const handleChangeTo = event => {
    setTo(event);
    if (!pattern.test(event)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleChangeQuantity = event => {
    setQuantity(event);
    if (!pattern.test(event) && balance > event) {
      setErrorQuantity(false);
    } else {
      setErrorQuantity(true);
    }
  };

  return (
    <LayoutScreen>
      <LayoutScroll>
        <Wrapper>
          <Container>
            <View>
              <ConvertToContainer>
                <BodyText type={5}>{i18n.use}</BodyText>
              </ConvertToContainer>
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
                <BodyText type={5}>{i18n.balance} 30.01</BodyText>
              </View>
              <CustomInput
                value={quantity}
                onChange={event => handleChangeQuantity(event)}
                placeholder={i18n.quantity}
                keyboardType="numeric"
                onPress={v => btnMax(v)}
                btnText={i18n.max}
                action
                textAlign="right"
                error={errorQuantity}
              />
              {errorQuantity && (
                <View>
                  <ErrorText>{i18n.insufficientFunds}</ErrorText>
                </View>
              )}
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
              <ConvertToContainer>
                <BodyText type={5}>{i18n.convertTo}</BodyText>
              </ConvertToContainer>
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
              <EmptyContent>
                <BodyText type={5}></BodyText>
              </EmptyContent>
              <CustomInput
                value={to}
                onChange={event => handleChangeTo(event)}
                placeholder="10,000"
                keyboardType="numeric"
                btnText="Max"
                action
                textAlign="right"
                error={error}
              />
              {error && <ErrorText>{i18n.insufficientFunds}</ErrorText>}
            </InputSection>
          </Container>

          <DividerContainer>
            <Divider></Divider>
          </DividerContainer>

          <RateContent>
            <View>
              <BodyText type={5}>{i18n.exchangeRate} </BodyText>
              <BodyText type={5}>{i18n.feeRate}</BodyText>
            </View>
            <View>
              <BodyText type={5}>1 BTC ≈ 19,302 USDT</BodyText>
              <BodyText type={5}>0.5%</BodyText>
            </View>
          </RateContent>

          <Precautions />

          <ButtonContainer>
            <ButtonPrimary
              title={i18n.exchange}
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
  z-index: 1;
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

const InputSection = styled.View`
  flex: 4;
`;

const SwapButtonWithLine = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const DividerContainer = styled.View`
  margin-top: 30px;
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

const EmptyContent = styled.View`
  margin-bottom: 10px;
  flex: 1;
  height: 100%;
`;

const ConvertToContainer = styled.View`
  margin-bottom: 10px;
`;

export default SwapBTCScreen;
