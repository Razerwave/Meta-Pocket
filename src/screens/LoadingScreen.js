import {useRef} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Svg, {Image, WithLocalSvg, SvgXml} from 'react-native-svg';
import WebView from 'react-native-webview';
import SVGatorComponent from '../assets/Basic Animations';
import {Screen, StyledText} from '../components';

const LoadingScreen = () => {
  return (
    <Screen>
      <SVGatorComponent />
    </Screen>
  );
};

export default LoadingScreen;
