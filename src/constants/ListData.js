import {
  gray100,
  green400,
  magenta,
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
    logo: require('../assets/icons/Meta.png'),
    type: 'Mining',
  },
  {
    title: 'Aleo Metaverse',
    description: 'description',
    logo: require('../assets/icons/dapp/Metaverse.png'),
    type: 'Mining',
  },
  {
    title: 'Aleo Uni-level',
    description: 'description',
    logo: require('../assets/icons/dapp/Uni-level.png'),
    type: 'Mining',
  },
  {
    title: 'Aleo Binary',
    description: 'description',
    logo: require('../assets/icons/dapp/binary.png'),
    type: 'Mining',
  },
  {
    title: 'Daily Art Story',
    description: 'description',
    logo: require('../assets/icons/dapp/ArtStory.png'),
    type: 'Popular',
  },
  {
    title: 'OTT Streaming',
    description: 'description',
    logo: require('../assets/icons/dapp/OTT-Stream.png'),
    type: 'Popular',
  },
  {
    title: 'DAS Metaverse',
    description: 'description',
    logo: require('../assets/icons/dapp/OTT-Stream.png'),
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
      star: true,
      image: require('../assets/icons/SteamBoats.png'),
      coin: 'ETH',
      total: '0.2',
    },
    {
      title: 'Two gils ...',
      description: 'Pierre-Auguste Renoir (1881)',
      star: true,
      image: require('../assets/icons/MaskGroup.png'),
      coin: 'ETH',
      total: '0.2',
    },
  ],
};

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
  list: [
    {color: magenta, coin: 'BTC', amount: 20224},
    {color: gray100, coin: 'ETH', amount: 17335},
    {color: purple100, coin: 'USDT', amount: 15000},
    {color: primary, coin: 'FIL', amount: 8668},
  ],
};

const WalletHomeData = {
  total: 18254,
  notice: [
    {
      title: 'ALEO Metaverse Coming Soon',
      imagePath: require('../assets/icons/dapp/Metaverse2.png'),
    },
    {
      title: 'ALEO Metaverse Coming Soon',
      imagePath: require('../assets/icons/dapp/ArtStory.png'),
    },
    {
      title: 'ALEO Metaverse Coming Soon',
      imagePath: require('../assets/icons/dapp/binary.png'),
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

const MoreData = {
  MyUID: 'M123456',
  langSelectData: [
    {label: 'ENGLISH', value: 'ENG', selectedLabel: 'ENG'},
    {label: 'KOREAN', value: 'KOR', selectedLabel: 'KOR'},
  ],
  countries: [
    {label: 'Select Your country', value: 'placeholder'},
    {label: 'England (+999)', value: 'ENG'},
    {label: 'South Korea (+82)', value: 'KOR'},
  ],
};

export {
  testData,
  items,
  Tabs,
  Dappdata,
  PortfolioData,
  WalletHomeData,
  ExploreData,
  MoreData,
  BTC_INFO_DATA,
};
