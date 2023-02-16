import {
  gray100,
  gray200,
  gray300,
  green400,
  magenta,
  neutral100,
  primary,
  purple100,
  red,
  yellow200,
  yellow300,
} from './colors';

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
      title: 'Two gils ...',
      url: 'https://www.youtube.com/',
      description: 'https://www.youtube.com/',
      star: true,
      Image: require('../assets/icons/all.png'),
      logo: require('../assets/icons/Group6679.png'),
    },
    {
      title: 'Two gils ...',
      url: 'https://www.youtube.com/',
      description: 'https://www.youtube.com/',
      star: true,
      Image: require('../assets/icons/all.png'),
      logo: require('../assets/icons/bitcoin.png'),
    },
    {
      title: 'Two gils ...',
      url: 'https://www.youtube.com/',
      description: 'https://www.youtube.com/',
      star: false,
      Image: require('../assets/icons/all.png'),
      logo: require('../assets/icons/fx.png'),
    },
    {
      title: 'Two gils ...',
      url: 'https://www.youtube.com/',
      description: 'https://www.youtube.com/',
      star: false,
      Image: require('../assets/icons/all.png'),
      logo: require('../assets/icons/Layer_1.png'),
    },
  ],
  art: [
    {
      title: 'Two gils ...',
      description: 'Pierre-Auguste Renoir (1881)',
      star: true,
      image: require('../assets/icons/MaskGroup.png'),
      coin: 'ETH',
      total: '0.2',
    },
    {
      title: 'Flowers ...',
      description: 'Edgar Degas (1873)',
      star: true,
      image: require('../assets/icons/SteamBoats.png'),
      coin: 'ETH',
      total: '0.2',
    },
    {
      title: 'Steamboats in the Port ...',
      description: 'Pierre-Auguste Renoir (1881)',
      star: false,
      image: require('../assets/icons/SteamBoats.png'),
      coin: 'ETH',
      total: '0.2',
    },
    {
      title: 'Two gils ...',
      description: 'Pierre-Auguste Renoir (1881)',
      star: true,
      image: require('../assets/icons/flowers.png'),
      coin: 'ETH',
      total: '0.2',
    },
  ],
};

// const Artlinks = [
//   {
//     name: 'Two gils ...',
//     author: 'Pierre-Auguste Renoir (1881)',
//     coin: 'ETH',
//     total: '0.1',
//     image: require('../assets//icons/MaskGroup.png'),
//     fav: true,
//   },
//   {
//     name: 'Flowers ...',
//     author: 'Edgar Degas (1873)',
//     coin: 'ETH',
//     total: '0.3',
//     image: require('../assets//icons/flowers.png'),
//     fav: true,
//   },
//   {
//     name: 'Steamboats in the Port ...',
//     author: 'Vladimir Kush (1111)',
//     coin: 'ETH',
//     total: '0.2',
//     image: require('../assets//icons/SteamBoats.png'),
//     fav: true,
//   },
//   {
//     name: 'Ancient Winter city ...',
//     author: 'Paul Jackson Pollock (1912)',
//     coin: 'ETH',
//     total: '0.2',
//     image: require('../assets//icons/Rectangle229.png'),
//     fav: true,
//   },
// ];

// const links = [
//   {
//     id: 2,
//     Subject: 'Aleo',
//     url: 'Aleo.org',
//     Image: require('../assets/icons/all.png'),
//     logo: require('../assets/icons/Group6679.png'),
//     fav: false,
//   },
//   {
//     id: 1,
//     Subject: 'Bitcoin',
//     url: 'bitcoin.org/ko',
//     Image: require('../assets/icons/Vector.png'),
//     logo: require('../assets/icons/bitcoin.png'),
//     fav: true,
//   },
//   {
//     id: 3,
//     Subject: 'Filecoin',
//     url: 'filecoin.io',
//     Image: require('../assets/icons/Ellipse93.png'),
//     logo: require('../assets/icons/fx.png'),
//     fav: true,
//   },
//   {
//     id: 4,
//     Subject: 'Plenty',
//     url: 'www.plenty.com',
//     Image: require('../assets/icons/Ellipse94.png'),
//     logo: require('../assets/icons/Layer_1.png'),
//     fav: true,
//   },
//   {
//     id: 5,
//     Subject: 'Ethererium',
//     url: 'www.etherium.com',
//     Image: require('../assets/icons/Ellipse95.png'),
//     fav: false,
//   },
//   {
//     id: 6,
//     Subject: 'Sol',
//     url: 'www.sol.io',
//     Image: require('../assets/icons/Ellipse96.png'),
//     fav: false,
//   },
//   {
//     id: 7,
//     Subject: 'Tether',
//     url: 'www.Tether.org',
//     Image: require('../assets/icons/favorite.png'),
//     fav: true,
//   },
//   {
//     id: 6,
//     Subject: 'Ethererium1',
//     url: 'www.etherium.com',
//     Image: require('../assets/icons/Ellipse95.png'),
//     fav: false,
//   },
// ];

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
  {
    key: 'Website',
    title: 'Website',
    dotColor: yellow200,
    items: ExploreData.website,
  },
  {
    key: 'Art',
    title: 'Art',
    dotColor: red,
    items: ExploreData.art,
  },
];

const PortfolioData = {
  total: 57784,
  list: [
    {color: magenta, coin: 'BTC', percentage: 30, amount: 20224},
    {color: gray100, coin: 'ETH', percentage: 10, amount: 17335},
    {color: purple100, coin: 'USDT', percentage: 20, amount: 11557},
    {color: primary, coin: 'FIL', percentage: 40, amount: 8668},
  ],
};

const WalletHomeData = {
  total: 18254,
  notice: [
    {
      title: 'ALEO Metaverse Coming Soon',
      imagePath: require('../assets/images/Aleo.png'),
    },
  ],
  tokens: [
    {
      name: 'BTC',
      description: 'Bitcoin',
      amount: 18888,
      percent: 0.3,
      change: 3.4,
      image: require('../assets/images/Bitcoin.png'),
    },
    {
      name: 'BTC',
      description: 'Bitcoin',
      amount: 18888,
      percent: 0.3,
      change: 3.4,
      image: require('../assets/images/Bitcoin.png'),
    },
    {
      name: 'BTC',
      description: 'Bitcoin',
      amount: 18888,
      percent: 0.3,
      change: 3.4,
      image: require('../assets/images/Bitcoin.png'),
    },
    {
      name: 'BTC',
      description: 'Bitcoin',
      amount: 18888,
      percent: 0.3,
      change: 3.4,
      image: require('../assets/images/Bitcoin.png'),
    },
    {
      name: 'BTC',
      description: 'Bitcoin',
      amount: 18888,
      percent: 0.3,
      change: 3.4,
      image: require('../assets/images/Bitcoin.png'),
    },
    {
      name: 'BTC',
      description: 'Bitcoin',
      amount: 18888,
      percent: 0.3,
      change: 3.4,
      image: require('../assets/images/Bitcoin.png'),
    },
  ],
  nfts: [
    {
      name: 'Daily Art Story',
      type: 'gold',
      typeColor: yellow300,
      memberType: 'Membership',
      code: 748,
      image: require('../assets/icons/ExploreIcons/ItemImage.png'),
      myAddres: '0xe34lkjds....7BEsdlkfjls',
    },
    {
      name: 'Daily Art Story',
      type: 'Platinium',
      typeColor: green400,
      memberType: 'Membership',
      code: 748,
      image: require('../assets/icons/ExploreIcons/ItemImage.png'),
      myAddres: '0xe34lkjds....7BEsdlkfjls',
    },
    {
      name: 'Daily Art Story',
      type: 'gold',
      typeColor: yellow300,
      memberType: 'Membership',
      code: 748,
      image: require('../assets/icons/ExploreIcons/ItemImage.png'),
      myAddres: '0xe34lkjds....7BEsdlkfjls',
    },
  ],
};

const langSelectData = [
  {label: 'ENGLISH', value: 'ENG', selectedLabel: 'ENG'},
  {label: 'KOREAN', value: 'KOR', selectedLabel: 'KOR'},
];
const BTC_INFO_DATA = [
  {
    date: 'Jan 2, 2023 PM 12:00',
    transactions: [
      {
        type: 'received',
        amount: 0.1,
      },
      {
        type: 'send',
        amount: 0.1,
      },
      {
        type: 'received',
        amount: 0.1,
      },
    ],
  },
  {
    date: 'Jan 2, 2023 PM 12:00',
    transactions: [
      {
        type: 'send',
        amount: 0.1,
      },
      {
        type: 'send',
        amount: 0.1,
      },
    ],
  },
];

export {
  testData,
  items,
  Tabs,
  Dappdata,
  PortfolioData,
  WalletHomeData,
  ExploreData,
  langSelectData,
  BTC_INFO_DATA,
};
