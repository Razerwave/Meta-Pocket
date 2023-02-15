import { gray100, gray200, gray300, magenta, neutral100, primary, purple100 } from './colors';

const Dappdata = [
  {
    title: 'Aleo Meta Pocket',
    description: 'description',
    image: require('../assets/icons/Meta.png'),
    type: 'Mining',
  },
  {
    title: 'Aleo Metaverse',
    description: 'description',
    image: require('../assets/icons/dapp/Metaverse.png'),
    type: 'Mining',
  },
  {
    title: 'Aleo Uni-level',
    description: 'description',
    image: require('../assets/icons/dapp/Uni-level.png'),
    type: 'Mining',
  },
  {
    title: 'Aleo Binary',
    description: 'description',
    image: require('../assets/icons/dapp/binary.png'),
    type: 'Mining',
  },
  {
    title: 'Daily Art Story',
    description: 'description',
    image: require('../assets/icons/dapp/ArtStory.png'),
    type: 'Popular',
  },
  {
    title: 'OTT Streaming',
    description: 'description',
    image: require('../assets/icons/dapp/OTT-Stream.png'),
    type: 'Popular',
  },
  {
    title: 'DAS Metaverse',
    description: 'description',
    image: require('../assets/icons/dapp/OTT-Stream.png'),
    type: 'Popular',
  },
];

const ExploreData = {
  website: [
    {
      text: 'Two gils ...',
      url: 'https://www.youtube.com/',
      description: 'https://www.youtube.com/',
      star: true,
    },
    {
      text: 'Two gils ...',
      url: 'https://www.youtube.com/',
      description: 'https://www.youtube.com/',
      star: true,
    },
    {
      text: 'Two gils ...',
      url: 'https://www.youtube.com/',
      description: 'https://www.youtube.com/',
      star: false,
    },
    {
      text: 'Two gils ...',
      url: 'https://www.youtube.com/',
      description: 'https://www.youtube.com/',
      star: false,
    },
  ],
  art: [
    {
      text: 'Two gils ...',
      description: 'Pierre-Auguste Renoir (1881)',
      star: true,
    },
    {
      text: 'Flowers ...',
      description: 'Edgar Degas (1873)',
      star: true,
    },
    {
      text: 'Steamboats in the Port ...',
      description: 'Pierre-Auguste Renoir (1881)',
      star: false,
    },
    {
      text: 'Two gils ...',
      description: 'Pierre-Auguste Renoir (1881)',
      star: true,
    },
  ]
};

const Artlinks = [
  {
    name: 'Two gils ...',
    author: 'Pierre-Auguste Renoir (1881)',
    coin: 'ETH',
    total: '0.1',
    image: require('../assets//icons/MaskGroup.png'),
    fav: true,
  },
  {
    name: 'Flowers ...',
    author: 'Edgar Degas (1873)',
    coin: 'ETH',
    total: '0.3',
    image: require('../assets//icons/flowers.png'),
    fav: true,
  },
  {
    name: 'Steamboats in the Port ...',
    author: 'Vladimir Kush (1111)',
    coin: 'ETH',
    total: '0.2',
    image: require('../assets//icons/SteamBoats.png'),
    fav: true,
  },
  {
    name: 'Ancient Winter city ...',
    author: 'Paul Jackson Pollock (1912)',
    coin: 'ETH',
    total: '0.2',
    image: require('../assets//icons/Rectangle229.png'),
    fav: true,
  },
];

const links = [
  {
    id: 2,
    Subject: 'Aleo',
    url: 'Aleo.org',
    Image: require('../assets/icons/all.png'),
    logo: require('../assets/icons/Group6679.png'),
    fav: false,
  },
  {
    id: 1,
    Subject: 'Bitcoin',
    url: 'bitcoin.org/ko',
    Image: require('../assets/icons/Vector.png'),
    logo: require('../assets/icons/bitcoin.png'),
    fav: true,
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

  // {
  //   key: 'Item',
  //   title: 'Item',
  //   items: links,
  //   icons: require('../assets/icons/Ellipse94.png'),
  //   fav: true,
  // },

  {
    key: 'Art',
    title: 'Art',
    items: Artlinks,
    icons: require('../assets/icons/Ellipse95.png'),
    fav: true,
  },

  // {
  //   key: 'Article',
  //   title: 'Article',
  //   items: links,
  //   icons: require('../assets/icons/Ellipse96.png'),
  //   fav: false,
  // },
];

const PortfolioData = {
  total: 57784,
  list: [
    { color: magenta, coin: 'BTC', percentage: 30, amount: 20224 },
    { color: gray100, coin: 'ETH', percentage: 10, amount: 17335 },
    { color: purple100, coin: 'USDT', percentage: 20, amount: 11557 },
    { color: primary, coin: 'FIL', percentage: 40, amount: 8668 },
  ]
}

const WalletHomeData = {
  total: 18254,
  notice: [
    { title: 'ALEO Metaverse Coming Soon', imagePath: require('../assets/images/Aleo.png') }
  ],
  tokens: [
    {}
  ]
}

export {
  links,
  testData,
  items,
  Tabs,
  Artlinks,
  Dappdata,
  PortfolioData,
  WalletHomeData,
  ExploreData,
};
