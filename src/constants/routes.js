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

    BTC_INFO: 'WALLET_BTC_INFO',
    BTC_HISTORY: 'WALLET_BTC_HISTORY',
    BTC_SEND: 'WALLET_BTC_SEND',
    BTC_RECEIVE: 'WALLET_BTC_RECEIVE',
    BTC_SWAP: 'WALLET_BTC_SWAP',
    BTC_STAKING: 'WALLET_BTC_STAKING',
    
    NFT_INFO: 'WALLET_NFT_INFO',
  },
  SETTING: {
    RESET_PASSCODE: 'RESET_PASSCODE',
    CONFIRM_RESET_PASSCODE: 'CONFIRM_RESET_PASSCODE',
    EMAIL_VERIFICATION: 'EMAIL_VERIFICATION',
    REFERRAL: 'REFERRAL',
    NOTICE_LIST: 'SETTING_NOTICE_LIST',
    NOTICE: 'SETTING_NOTICE',
  },
  EXPLORE: {
    LIST_SCREEN: 'LIST_SCREEN',
    WEB: 'WEBB_LINK',
  },
  BUY: {
    BUY_SCREEN: 'BUY_SCREEN',
    WEB: 'WEBB_LINK',
  },
  ENTERPASS: {
    ENTRYPASS_SCREEN: 'ENTRYPASS_SCREEN',
  },
  SENDBTC: {
    SENDBTC_SCREEN: 'SENDBTC_SCREEN',
  },
  ACTION: {
    ACTION_SCREEN: 'ACTION_SCREEN',
  },
  LOADNFT: {
    LOADNFT_SCREEN: 'LOADNFT_SCREEN',
  },
  SENDNFT: {
    SENDNFT_SCREEN: 'SENDNFT_SCREEN',
  },
  SENDNFT_AUTH: {
    SENDNFT_AUTH_SCREEN: 'SENDNFT_AUTH_SCREEN',
  },
};

export default ROUTES;
