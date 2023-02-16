const ROUTES = {
  AUTH: {
    WELCOME: 'AUTH_WELCOME',
    RECOVER_WALLET: 'AUTH_RECOVER WALLET',
    BACKUP_WALLET: 'BACKUP WALLET',
    CHECK_BACKUP_WALLET: 'AUTH_NEW WALLET WORDS',
    PROTECT_WALLET: 'AUTH_TERMS SCREEN',
    CREATE_PASSCODE: 'AUTH_CREATE PASSWORD',
    CONFIRM_PASSCODE: 'AUTH_RE-ENTRY PASSWORD',
    RESULT: 'AUTH_RESULT',
  },
  HOME: {
    WALLET: 'HOME_WALLET',
    EXPLORE: 'HOME_EXPLORE',
    DAPP: 'HOME_DAPP',
    SETTING: 'HOME_SETTING',
  },
  WALLET: {
    HOME: 'WALLET_HOME',
    PORTFOLIO: 'WALLET_PORTFOLIO',
    NOTICE: 'WALLET_NOTICE',

    BTC_INFO: 'WALLET_BTC_INFO',
    BTC_HISTORY: 'WALLET_BTC_HISTORY',
    BTC_SEND: 'WALLET_BTC_SEND',
    BTC_RECEIVE: 'WALLET_BTC_RECEIVE',
    BTC_RECEIVE_USDT: 'WALLET_BTC_RECEIVE_USDT',
    BTC_SWAP: 'WALLET_BTC_SWAP',
    BTC_STAKING: 'WALLET_BTC_STAKING',
    BTC_STAKING_2: 'WALLET_BTC_STAKING_2',

    NFT_INFO: 'WALLET_NFT_INFO',
    NFT_LOAD: 'WALLET_NFT_LOAD',
    NFT_SEND: 'WALLET_NFT_SEND',
    NFT_SEND_AUTH: 'WALLET_NFT_SEND_AUTH',
  },
  EXPLORE: {
    HOME: 'EXPLORE_HOME',
    LIST_SCREEN: 'LIST_SCREEN',
    BUY_ITEM: 'BUY_ITEM',
    WEB: 'WEBB_LINK',
  },
  SETTING: {
    HOME: 'SETTING_HOME',
    RESET_PASSCODE: 'RESET_PASSCODE',
    CONFIRM_RESET_PASSCODE: 'CONFIRM_RESET_PASSCODE',
    EMAIL_VERIFICATION: 'EMAIL_VERIFICATION',
    REFERRAL: 'REFERRAL',
    NOTICE_LIST: 'SETTING_NOTICE_LIST',
    NOTICE: 'SETTING_NOTICE',
  },
  ENTERPASS: {
    ENTRYPASS_SCREEN: 'ENTRYPASS_SCREEN',
  },
  ACTION: {
    ACTION_SCREEN: 'ACTION_SCREEN',
  },
};

export default ROUTES;
