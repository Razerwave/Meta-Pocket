import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {useTheme} from 'styled-components';
import {
  ButtonPrimary,
  LayoutBottom,
  LayoutScreen,
  LayoutScroll,
  Paragraph,
  Stack,
  StepsAuth,
} from '../../components';
import {ROUTES} from '../../constants';
import {gray100} from '../../constants/colors';
import {useAuth} from '../../context/AuthContext';

const RecoverWallet = ({navigation}) => {
  const {i18n} = useAuth();
  const [words, setWords] = useState('');
  const {fontColor, backgroundCardColor, recovery} = useTheme();

  const handleSubmit = () => {
    navigation.navigate(ROUTES.AUTH.PROTECT_WALLET);
  };

  return (
    <LayoutScreen>
      <LayoutScroll>
        <StepsAuth current={1} />
        <Stack marginTop={80} marginHorizontal={28} spacing={40}>
          <Paragraph
            title={i18n.recoverYourWallet}
            body={i18n.recoverWordsWarning}
          />
          <TextInput
            style={[
              styles.input,
              {
                color: fontColor,
                backgroundColor: recovery.inputColor,
                borderColor: recovery.borderColor,
                borderWidth: 1,
              },
            ]}
            editable
            multiline
            numberOfLines={2}
            textAlignVertical="top"
            placeholderTextColor="#838AA5"
            placeholder={i18n.pasteRecoveryPhrase}
            onChangeText={v => setWords(v)}
            value={words}
          />
        </Stack>
        <LayoutBottom>
          <ButtonPrimary title={i18n.continue} onPress={handleSubmit} />
        </LayoutBottom>
      </LayoutScroll>
    </LayoutScreen>
  );
};

const styles = StyleSheet.create({
  inputBox: {},
  input: {
    padding: 16,
    borderRadius: 10,
    fontSize: 12,
    // lineHeight: 24,
    height: 80,

    fontWeight: '600',
  },
});

export default RecoverWallet;
