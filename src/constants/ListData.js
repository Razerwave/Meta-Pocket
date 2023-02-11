const links = [
  {
    id: 1,
    Subject: 'Bitcoin',
    url: 'bitcoin.org/ko',
    Image: require('../assets/icons/Vector.png'),
    logo: require('../assets/icons/bitcoin.png'),
    fav: true,
  },
  {
    id: 2,
    Subject: 'Aleo',
    url: 'Aleo.org',
    Image: require('../assets/icons/all.png'),
    logo: require('../assets/icons/Group6679.png'),
    fav: false,
  },
  {
    id: 3,
    Subject: 'Filecoin',
    url: 'filecoin.io',
    Image: require('../assets/icons/Ellipse93.png'),
    logo: require('../assets/icons/fx.png'),
    fav: true,
  },
  {
    id: 4,
    Subject: 'Plenty',
    url: 'www.plenty.com',
    Image: require('../assets/icons/Ellipse94.png'),
    logo: require('../assets/icons/Layer_1.png'),
    fav: true,
  },
  {
    id: 5,
    Subject: 'Ethererium',
    url: 'www.etherium.com',
    Image: require('../assets/icons/Ellipse95.png'),
    fav: false,
  },
  {
    id: 6,
    Subject: 'Sol',
    url: 'www.sol.io',
    Image: require('../assets/icons/Ellipse96.png'),
    fav: false,
  },
  {
    id: 7,
    Subject: 'Tether',
    url: 'www.Tether.org',
    Image: require('../assets/icons/favorite.png'),
    fav: true,
  },
  {
    id: 6,
    Subject: 'Ethererium1',
    url: 'www.etherium.com',
    Image: require('../assets/icons/Ellipse95.png'),
    fav: false,
  },
  {
    id: 7,
    Subject: 'Sol1',
    url: 'www.sol.io',
    Image: require('../assets/icons/Ellipse96.png'),
    fav: false,
  },
  {
    id: 8,
    Subject: 'Tether1',
    url: 'www.Tether.org',
    Image: require('../assets/icons/favorite.png'),
    fav: true,
  },
  {
    id: 9,
    Subject: 'Tether4',
    url: 'www.Tether.org',
    Image: require('../assets/icons/favorite.png'),
    fav: true,
  },
  {
    id: 10,
    Subject: 'Tether3',
    url: 'www.Tether.org',
    Image: require('../assets/icons/favorite.png'),
    fav: true,
  },
  {
    id: 11,
    Subject: 'Tether2',
    url: 'www.Tether.org',
    Image: require('../assets/icons/favorite.png'),
    fav: true,
  },
];

const items = [
  {
    Subject: 'Boots',
    Date: 'Feb 7, 2023',
    coin: 'ETH',
    total: '0.05',
    fav: false,
  },

  {
    Subject: 'Hammer',
    Date: 'Oct 11, 2022',
    coin: 'ETH',
    total: '0.7',
    fav: true,
  },
];

const Tabs = [
  {
    key: 'first',
    title: 'First',
  },

  {
    key: 'second',
    title: 'Second',
  },
];

const testData = [
  // {
  //   key: 'All',
  //   title: 'All',
  //   items: links,
  //   icons: require('../assets/icons/all.png'),
  // },

  // {
  //   key: 'Favorite',
  //   title: 'Favorite',
  //   items: links,
  //   icons: require('../assets/icons/Vector.png'),
  // },

  {
    key: 'Website',
    title: 'Website',
    items: links,
    icons: require('../assets/icons/Ellipse93.png'),
    fav: true,
  },

  {
    key: 'Item',
    title: 'Item',
    items: links,
    icons: require('../assets/icons/Ellipse94.png'),
    fav: true,
  },

  {
    key: 'Art',
    title: 'Art',
    items: links,
    icons: require('../assets/icons/Ellipse95.png'),
    fav: true,
  },

  {
    key: 'Article',
    title: 'Article',
    items: links,
    icons: require('../assets/icons/Ellipse96.png'),
    fav: false,
  },
];

export {links, testData, items, Tabs};
