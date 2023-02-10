import { useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Svg, { Image, WithLocalSvg, SvgXml } from 'react-native-svg';
import WebView from 'react-native-webview';
import SVGatorComponent from '../assets/Basic Animations';
import { LayoutCenter, LayoutScreen } from '../components';

const LoadingScreen = () => {
  return (
    <LayoutScreen>
      <LayoutCenter>
        <SVGatorComponent />
      </LayoutCenter>
    </LayoutScreen>
  );
};

export default LoadingScreen;
