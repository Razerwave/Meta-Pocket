import { LayoutCenter, LayoutScreen } from '../components';
import { AnimationLoading } from '../assets/animations';

const LoadingScreen = () => {
  return (
    <LayoutScreen>
      <LayoutCenter>
        <AnimationLoading style={{ width: 117 }} />
      </LayoutCenter>
    </LayoutScreen>
  );
};

export default LoadingScreen;
