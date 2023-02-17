import React, { useEffect, useState } from 'react';
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
import { DarkTheme } from '../../constants';
import { IconDottRec } from '../../assets/icons';
import { neutral100 } from '../../constants/colors';
import { currency } from '../../utils/formats';

// TEST DATA
import { PortfolioData } from '../../constants/ListData';
import { useAuth } from '../../context/AuthContext';

const PortfolioScreen = () => {
  const { i18n } = useAuth();
  const { backgroundColor, statusBarStyle, fontColor } = DarkTheme;
  const [data, setData] = useState([]);

  const chartData = {
    labels: ['', '', '', '', '', '', 'ALL (day)'],
    data: [0, 20, 15, 40, 10, 30, 50],
    legend: ['($)'], // optional
  };

  useEffect(() => {
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
            headerStyle={{ backgroundColor: backgroundColor }}
            headerTitleStyle={{ color: fontColor }}
          />
          <Stack marginTop={30} marginBottom={20}>
            <CircleAnimated data={data} />
          </Stack>
        </FixedThemeWrapper>
        <CustomLineChartKit data={chartData} showHorizontalLabel={true} />
      </LayoutScroll>
    </LayoutScreen>
  );
};

export default PortfolioScreen;
