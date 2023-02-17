import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

import {
  ButtonPrimary,
  ButtonText,
  CardBox,
  LayoutBottom,
  LayoutScreen,
  Paragraph,
  Stack,
  StepsAuth,
} from '../../components';
import {ROUTES} from '../../constants';
import {IconCopy} from '../../assets/icons';
import {useAuth} from '../../context/AuthContext';

const BackupWallet = ({navigation}) => {
  const {i18n, showToast} = useAuth();
  const [copied, setCopied] = useState(false);
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(
      'Isolate tiny hat want latin glide already Friend exchange gap frost inner'.split(
        ' ',
      ),
    );
  }, []);

  const handleCopy = () => {
    showToast({text: i18n.copiedToClipBoard, type: 'success', fromTop: 50});
    Clipboard.setString(words.join(' '));
    setCopied(true);
  };

  return (
    <LayoutScreen>
      <StepsAuth current={1} />
      <Stack
        marginTop={80}
        marginHorizontal={28}
        marginBottom={30}
        spacing={50}>
        <Paragraph
          title={i18n.backupYourWallet}
          body={[i18n.recoveryPhaseInfo, i18n.recoveryPhaseWarning]}
        />
        <Stack>
          <CardBox style={{borderRadius: 10}}>
            <Stack direction="row" spacing={10} style={{flexWrap: 'wrap'}}>
              {words.map((word, index) => (
                <ButtonText key={index} style={{fontSize: 12, lineHeight: 16}}>
                  {word}
                </ButtonText>
              ))}
            </Stack>
          </CardBox>
          <Stack padding={16} spacing={16} style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={handleCopy}>
              <Stack direction="row" spacing={6}>
                <IconCopy />
                <BodyText style={{fontSize: 12, lineHeight: 16}}>
                  {copied ? i18n.copiedToClipBoard : i18n.copyToClipBoard}
                </BodyText>
              </Stack>
            </TouchableOpacity>
          </Stack>
        </Stack>
      </Stack>
      <LayoutBottom>
        <ButtonPrimary
          title={i18n.continue}
          onPress={() =>
            navigation.navigate(ROUTES.AUTH.CHECK_BACKUP_WALLET, {
              firstWord: words[0],
              lastWord: words[words.length - 1],
              words: [...words].sort((a, b) => 0.5 - Math.random()),
            })
          }
        />
      </LayoutBottom>
    </LayoutScreen>
  );
};

export default BackupWallet;
