import React, { useState, useEffect } from 'react';
import { ROUTES } from '../../constants';
import { Dappdata } from '../../constants/ListData';
import { CustomTabs, Card, LayoutScreen, LayoutScroll } from '../../components';
import { useAuth } from '../../context/AuthContext';
import styled from 'styled-components/native';

const DappScreen = ({ navigation }) => {
  const { i18n } = useAuth();
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  const TAB_ROUTES = [
    { key: 'AllTab', title: i18n.all },
    { key: 'PopularTab', title: i18n.popular },
    { key: 'MiningTab', title: i18n.mining },
  ];

  useEffect(() => {
    setData(Dappdata);
  }, []);

  const renderScene = ({ route }) => {
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
            data={data.filter(({ type }) => type === 'Popular')}
            onPress={() =>
              navigation.navigate(ROUTES.ENTERPASS.ENTRYPASS_SCREEN)
            }
          />
        );
      case 'MiningTab':
        return (
          <DappTab
            data={data.filter(({ type }) => type === 'Mining')}
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

const DappTab = ({ data = [], onPress }) => {
  return (
    <LayoutScreen>
      <LayoutScroll>
        <Container>
          <Content>
            {data.map((item, index) => (
              <Card key={index} item={item} onPress={onPress} />
            ))}
          </Content>
        </Container>
      </LayoutScroll>
    </LayoutScreen>
  )
};

export default DappScreen;

const Container = styled.View`
  padding: 30px;
  gap: 20px;
  border-top-width: 1px;
  border-color: ${props => props.theme.tabIndicatorColor};
`;

const Content = styled.View`
  gap: 20px;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;