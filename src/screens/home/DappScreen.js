import React, {useState, useEffect} from 'react';
import {ROUTES} from '../../constants';
import {Dappdata} from '../../constants/ListData';
import {
  CustomTabs,
  Card,
  LayoutScreen,
  LayoutScroll,
  Stack,
} from '../../components';
import {useAuth} from '../../context/AuthContext';
import styled from 'styled-components/native';
import {View} from 'react-native';

const DappScreen = ({navigation}) => {
  const {i18n} = useAuth();
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  const TAB_ROUTES = [
    {key: 'AllTab', title: i18n.all},
    {key: 'PopularTab', title: i18n.popular},
    {key: 'MiningTab', title: i18n.mining},
  ];

  useEffect(() => {
    setData(Dappdata);
  }, []);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'AllTab':
        return (
          <DappTab
            data={data}
            onPress={() =>
              navigation.navigate(ROUTES.ENTERPASS.ENTRYPASS_SCREEN)
            }
          />
        );
      case 'PopularTab':
        return (
          <DappTab
            data={data.filter(({type}) => type === 'Popular')}
            onPress={() =>
              navigation.navigate(ROUTES.ENTERPASS.ENTRYPASS_SCREEN)
            }
          />
        );
      case 'MiningTab':
        return (
          <DappTab
            data={data.filter(({type}) => type === 'Mining')}
            onPress={() =>
              navigation.navigate(ROUTES.ENTERPASS.ENTRYPASS_SCREEN)
            }
          />
        );
    }
  };

  return (
    <CustomTabs
      tabIndex={index}
      onTabChange={setIndex}
      tabRoutes={TAB_ROUTES}
      renderScene={renderScene}
    />
  );
};

const DappTab = ({data = [], onPress}) => {
  return (
    <LayoutScreen>
      <LayoutScroll>
        <Stack
          marginTop={30}
          marginHorizontal={26}
          direction="row"
          style={{flexWrap: 'wrap', justifyContent: 'space-between'}}>
          {data.map((item, index) => (
            <Stack key={index} marginBottom={30}>
              <Card item={item} onPress={onPress} />
            </Stack>
          ))}
        </Stack>
      </LayoutScroll>
    </LayoutScreen>
  );
};

export default DappScreen;
