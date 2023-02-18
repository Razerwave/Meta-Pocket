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
    console.log(data);
  }, []);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'AllTab':
        return (
          <DappTab
            data={data}
            onPress={item =>
              navigation.navigate(ROUTES.EXPLORE.WEB, {
                title: item.title,
                uri: 'https://reactnavigation.org/docs/stack-navigator/',
              })
            }
          />
        );
      case 'PopularTab':
        return (
          <DappTab
            data={data.filter(({type}) => type === 'Popular')}
            onPress={item =>
              navigation.navigate(ROUTES.EXPLORE.WEB, {
                title: item.title,
                uri: 'https://reactnavigation.org/docs/stack-navigator/',
              })
            }
          />
        );
      case 'MiningTab':
        return (
          <DappTab
            data={data.filter(({type}) => type === 'Mining')}
            onPress={item =>
              navigation.navigate(ROUTES.EXPLORE.WEB, {
                title: item.title,
                uri: 'https://reactnavigation.org/docs/stack-navigator/',
              })
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
              <Card item={item} onPress={() => onPress(item)} />
            </Stack>
          ))}
        </Stack>
      </LayoutScroll>
    </LayoutScreen>
  );
};

export default DappScreen;
