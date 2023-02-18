import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  BodyText,
  Divider,
  LayoutScreen,
  LayoutScroll,
  Stack,
  Card,
} from '../../components';
import {ROUTES} from '../../constants';

import {testData} from '../../constants/ListData';
import {IconColorDot, IconExploreArrow} from '../../assets/icons';

const ExploreScreen = ({navigation, onPress}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setData(testData);
    };

    getData();
  }, []);

  return (
    <LayoutScreen>
      <LayoutScroll>
        <Stack marginTop={22} paddingHorizontal={20}>
          {data.map(({title, items, key, ...item}, index) => {
            return (
              <View key={index}>
                {index !== 0 && <Divider marginBottom={30} />}
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(ROUTES.EXPLORE.LIST_SCREEN, {
                      tabIndex: index,
                    })
                  }>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={8}
                    marginBottom={20}>
                    <IconColorDot size={6} color={item.dotColor} />
                    <BodyText fontWeight="600">{title}</BodyText>
                    <Stack style={{flex: 1, alignItems: 'flex-end'}}>
                      <IconExploreArrow />
                    </Stack>
                  </Stack>
                </TouchableOpacity>

                <View paddingLeft={15}>
                  <Stack
                    direction="row"
                    style={{flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    {items.slice(0, 4).map((item, Cardindex) => {
                      return (
                        <View key={Cardindex} style={{marginBottom: 30}}>
                          <Card
                            key={Cardindex}
                            item={item}
                            onPress={() =>
                              navigation.navigate(ROUTES.EXPLORE.LIST_SCREEN, {
                                tabIndex: index,
                              })
                            }
                          />
                        </View>
                      );
                    })}
                  </Stack>
                </View>
              </View>
            );
          })}
        </Stack>
      </LayoutScroll>
    </LayoutScreen>
  );
};

export default ExploreScreen;
