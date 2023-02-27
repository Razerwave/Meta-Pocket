import Animated, {FadeInUp, FadeOutUp} from 'react-native-reanimated';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {getDefaultHeaderHeight} from '@react-navigation/elements';
import {primary, white, red} from '../constants/colors';
import {IconClose, IconFilledChecked} from '../assets/icons';
import BodyText from './texts/BodyText';
import {TouchableOpacity} from 'react-native';
import {useAuth} from '../context/AuthContext';

const CustomToast = () => {
  const {toast, hideToast} = useAuth();
  return (
    toast.show && (
      <Wrapper entering={FadeInUp} exiting={FadeOutUp} fromTop={toast.fromTop}>
        <Toast type={toast.type}>
          <TextWrapper>
            <IconFilledChecked
              color={toast.type === 'danger' ? red : primary}
              fillColor={white}
            />
            <BodyText
              style={{
                color: white,
                fontWeight: 600,
                marginLeft: 10,
                width: '80%',
              }}>
              {toast.text}
            </BodyText>
          </TextWrapper>
          <TouchableOpacity onPress={() => hideToast()}>
            <IconClose color={white} />
          </TouchableOpacity>
        </Toast>
      </Wrapper>
    )
  );
};

const Wrapper = styled(Animated.View)`
  width: 100%;
  position: absolute;
  z-index: 999;
  top: ${props =>
    `${getStatusBarHeight() + (props.fromTop ? props.fromTop : 0)}px`};
  left: 0;
  display: flex;
  align-items: center;
`;

const Toast = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${props => (props.type === 'danger' ? red : primary)};
  padding: 10px 20px;
  border-radius: 4px;
`;

const TextWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export default CustomToast;
