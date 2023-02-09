import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
  useWindowDimensions,
  Animated,
} from 'react-native';
import {
  ButtonPrimary,
  Paginator,
  Screen,
  Stack,
  StyledText,
} from '../../components';
import { ROUTES } from '../../constants';

const WelcomeScreen = ({ navigation }) => {
  const [StaticPagination, setStaticPagination] = useState([
    {
      id: 1,
      title: 'Private and Secure',
      desription: 'Private key never leave your device.',
      image: require('../../assets//SecurityHeader.jpeg'),
    },
    {
      id: 2,
      title: 'All assets in one place',
      desription: 'View and store your assets seamlessy',
      image: require('../../assets//banner-The-Mobile-App-security-Best-Practices-To-Ensure-a-Hack-Proof-App-02.png'),
    },
    {
      id: 3,
      title: 'Trade assets',
      desription: 'Trade your assets anonymously',
      image: require('../../assets/Header+Blog.png'),
    },
  ]);

  const { width } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const Item = ({ item }) => (
    <View style={[styles.container, { width }]}>
      <Image source={item.image} style={styles.image} />
      <View>
        <StyledText style={styles.title}>{item.title}</StyledText>
        <StyledText style={styles.description}>{item.desription}</StyledText>
      </View>
    </View>
  );

  return (
    <Screen
      bottom={
        <Stack padding={16} spacing={16}>
          <ButtonPrimary
            title="Create New Wallet"
            onPress={() => navigation.navigate(ROUTES.AUTH.BACKUP_WALLET)}
          />
          <ButtonPrimary
            title="I already have a wallet"
            onPress={() => navigation.navigate(ROUTES.AUTH.RECOVER_WALLET)}
          />
        </Stack>
      }
    >
      <Stack>
        <View>
          <FlatList
            data={StaticPagination}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              },
            )}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slideRef}
          />
        </View>
        <Paginator data={StaticPagination} scrollX={scrollX} />
      </Stack>
    </Screen>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: '900',
    fontSize: 28,
    marginBottom: 30,
    textAlign: 'center',
  },
  description: {
    fontWeight: '500',
    paddingHorizontal: 64,
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    justifyContent: 'center',
    resizeMode: 'cover',
    marginVertical: 20,
    height: 250,
  },
});
export default WelcomeScreen;
