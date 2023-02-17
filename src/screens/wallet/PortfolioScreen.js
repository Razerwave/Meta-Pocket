import React, {useEffect, useState} from 'react';
import {
  BodyHeading,
  BodyText,
  CircleAnimated,
  CustomLineChartKit,
  FixedThemeWrapper,
  LayoutHeader,
  LayoutScreen,
  LayoutScroll,
  Stack,
} from '../../components';
import {DarkTheme} from '../../constants';
import {IconDottRec} from '../../assets/icons';
import {neutral100} from '../../constants/colors';
import {currency} from '../../utils/formats';

// TEST DATA
import {PortfolioData} from '../../constants/ListData';
import {useAuth} from '../../context/AuthContext';

const PortfolioScreen = () => {
  const {i18n} = useAuth();
  const {backgroundColor, statusBarStyle, fontColor} = DarkTheme;
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

  const chartData = {
    labels: ['', '', '', '', '', '', 'ALL (day)'],
    data: [0, 20, 15, 40, 10, 30, 50],
    legend: ['($)'], // optional
  };

  useEffect(() => {
    setTotal(PortfolioData.total);
    setData(PortfolioData.list);
  }, []);

  return (
    <LayoutScreen
      statusBar={{
        backgroundColor: backgroundColor,
        colorStyle: statusBarStyle,
      }}>
      <LayoutScroll>
        <FixedThemeWrapper dark>
          <LayoutHeader
            title="Portfolio"
            headerStyle={{backgroundColor: backgroundColor}}
            headerTitleStyle={{color: fontColor}}
          />
          <Stack marginTop={30} marginBottom={20}>
            <Stack alignItems="center" marginBottom={25}>
              <CircleAnimated data={data}>
                <BodyText type={5}>{i18n.totalValue}</BodyText>
                <BodyHeading type={4}>${currency(total)}</BodyHeading>
              </CircleAnimated>
            </Stack>
            <Stack spacing={10}>
              {data?.map((item, index) => (
                <LisItem key={index} {...item} />
              ))}
            </Stack>
          </Stack>
        </FixedThemeWrapper>
        <CustomLineChartKit data={chartData} showHorizontalLabel={true} />
      </LayoutScroll>
    </LayoutScreen>
  );
};

const LisItem = ({color, coin, percentage, amount}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={10}
      marginHorizontal={33}>
      <IconDottRec color={color} />
      <BodyText type={3}>{coin}</BodyText>
      <Stack style={{flex: 1, alignItems: 'flex-end'}}>
        <BodyText type={3} style={{color: neutral100}}>
          {percentage}
          <BodyText type={5} style={{color: neutral100}}>
            {' '}
            %
          </BodyText>
        </BodyText>
      </Stack>
      <BodyText type={3} style={{marginLeft: 10}}>
        ${currency(amount)}
      </BodyText>
    </Stack>
  );
};

export default PortfolioScreen;
