import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  BodyText,
  ButtonPrimary,
  CustomInput,
  CustomLineChartKit,
  Divider,
  ErrorText,
  LayoutBottom,
  LayoutScreen,
  LayoutScroll,
  Stack,
} from '../../components';
import {useAuth} from '../../context/AuthContext';
import {ROUTES} from '../../constants';

const StakingBTCScreen = ({navigation, route}) => {
  const [balance, setBalance] = useState();
  const [amount, setAmount] = useState();
  const [error, setError] = useState(false);

  let pattern = /[^0-9]/g;

  const {i18n} = useAuth();
  const type = 'BTC';
  const stacking = route.params.item;
  const handleMax = () => {
    // navigation.navogate(ROUTES.WALLET.BTC_STAKING_2, {amount});
  };

  const handleOnchange = event => {
    setAmount(event);
    if (!pattern.test(event)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleNext = () => {
    if (!amount) {
      setError(true);
      return;
    }

    !error &&
      navigation.navigate(ROUTES.WALLET.BTC_STAKING_2, {
        amount,
        stacking: stacking,
      });
  };

  const chartData = {
    labels: ['Deposit', '', '', '', '', '', 'Expire'],
    data: [0, 20, 15, 40, 10, 30, 50],
    legend: [''], // optional
  };

  return (
    <LayoutScreen>
      <LayoutScroll>
        <CustomLineChartKit data={chartData} />
        <Stack marginHorizontal={32}>
          <Divider />
          <Stack
            spacing={12}
            marginBottom={21}
            marginTop={21}
            paddingHorizontal={9}>
            <ListItem label={i18n.available} value={`0.1 ${type}`} />
            <ListItem label={i18n.myStacking} value={`0.1 ${type}`} />
            <ListItem label={i18n.minimum} value={`0.1 ${type}`} />
            <ListItem label={i18n.apr} value={`0.1 %`} />
            <ListItem label={i18n.period} value={`0.1 M`} />
          </Stack>
          <Divider />
        </Stack>
        <Stack
          marginTop={20}
          marginHorizontal={16}
          spacing={10}
          marginBottom={20}>
          <Stack style={{alignItems: 'flex-end', marginRight: 6}}>
            <BodyText>
              {i18n.balance} {balance}
            </BodyText>
          </Stack>
          <CustomInput
            value={amount}
            onChange={event => handleOnchange(event)}
            placeholder={i18n.quantity}
            btnText={i18n.max}
            onPress={handleMax}
            error={error}
          />
          {error && (
            <View>
              <ErrorText>{i18n.insufficientFunds}</ErrorText>
            </View>
          )}
        </Stack>

        <LayoutBottom type={2}>
          <ButtonPrimary title={i18n.next} onPress={() => handleNext()} />
        </LayoutBottom>
      </LayoutScroll>
    </LayoutScreen>
  );
};

const ListItem = ({label, value}) => {
  return (
    <Stack direction="row">
      <BodyText>{label}</BodyText>
      <Stack style={{flex: 1, alignItems: 'flex-end'}}>
        <BodyText>{value}</BodyText>
      </Stack>
    </Stack>
  );
};

export default StakingBTCScreen;

const styles = StyleSheet.create({});
