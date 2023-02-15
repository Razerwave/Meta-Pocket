import React from 'react';
import {View} from 'react-native';
import {IconSendBTCScreen} from '../assets/icons';
import {neutral100} from '../constants/colors';
import styled from 'styled-components/native';

import Stack from './Stack';
import BodyText from './texts/BodyText';
import Divider from './Divider';

const Precautions = () => {
  return (
    <View>
      <Stack padding={11}>
        <Section>
          <View>
            <IconSendBTCScreen />
          </View>
          <BodyText>Precautions</BodyText>
          <DividerContainer>
            <Divider></Divider>
          </DividerContainer>
        </Section>
        <BodyText style={{color: neutral100}}>
          When the withdrawal request is submitted, the assets to be transferred
          will be frozen during processing. Deduction of the assets from your
          balance will occur after the transaction have been completed.
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
