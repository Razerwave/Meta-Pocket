import {
    LOGIN_USER,
    LOGOUT_USER,
    TOGGLE_THEME,
    LOCK,
    UNLOCK,
    RESTORE_STATE,
    INITIALIZE
  } from './actions'
  
  const reducer = (state, action) => {
    if (action.type === INITIALIZE) {
      return {...state, isInitialized: true}
    }

    if (action.type === RESTORE_STATE) {
      return { ...state, ...action.payload }
    }

    if (action.type === LOGIN_USER) {
      return { ...state, passcode: action.payload.passcode, isLocked: false }
    }
  
    if (action.type === LOGOUT_USER) {
      return { ...state, passcode: null, isInitialized: false }
    }
  
    if (action.type === TOGGLE_THEME) {
      return { ...state, theme: action.payload.theme }
    }
  
    if (action.type === LOCK) {
      return { ...state, isLocked: true }
    }
  
    if (action.type === UNLOCK) {
      return { ...state, isLocked: false}
    }
  
  
    /*** LOADING ACTIONS ***/
    // if (action.type === LOADING_BEGIN) {
    //   return { ...state, isLoading: true, loadingOn: action.payload.type }
    // }
    // if (action.type === LOADING_SUCCESS) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     loadingOn: ''
    //   }
    // }
    // if (action.type === LOADING_ERROR) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     loadingOn: ''
    //   }
    // }
  
    throw new Error(`no such action : ${action.type}`)
  }
  
  export default reducer
  