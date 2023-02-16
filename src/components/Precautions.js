import React from 'react';
import { View } from 'react-native';
import { IconSendBTCScreen } from '../assets/icons';
import { neutral100 } from '../constants/colors';
import styled from 'styled-components/native';

import Stack from './Stack';
import BodyText from './texts/BodyText';
import Divider from './Divider';
import { useAuth } from '../context/AuthContext';

const Precautions = () => {
  const { i18n } = useAuth();

  return (
    <View>
      <Stack padding={11}>
        <Section>
          <View>
            <IconSendBTCScreen />
          </View>
          <BodyText type={7}>{i18n.precautions}</BodyText>
          <DividerContainer>
            <Divider></Divider>
          </DividerContainer>
        </Section>
        <BodyText type={7} style={{ color: neutral100 }}>
          {i18n.withdrawalRequestWarning}
        </BodyText>
      </Stack>
    </View>
  );
};

const DividerContainer = styled.View`
  flex: 1;
`;
const Section = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 8px;
  margin-bottom: 10px;
  align-items: center;
`;
export default Precautions;
