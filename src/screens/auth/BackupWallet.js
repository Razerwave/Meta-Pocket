import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard';
import { ButtonPrimary, CardBox, LayoutBottom, LayoutScreen, Paragraph, Stack, StepsAuth, StyledText } from '../../components';
import { ROUTES } from '../../constants'
import { IconCopy } from '../../assets/icons';

const BackupWallet = ({ navigation }) => {
  const [copied, setCopied] = useState(false);
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords('Isolate tiny hat want latin glide already Friend exchange gap frost inner'.split(' '))
  }, [])

  const handleCopy = () => {
    Clipboard.setString(words.join(' '))
    setCopied(true)
  }

  return (
    <LayoutScreen>
      <StepsAuth current={1} />
      <Stack marginTop={80} marginHorizontal={28} marginBottom={30} spacing={50}>
        <Paragraph
          title="Back Up Your Wallet"
          body={[
            'The recovery phrase is the only way to recover your cryptocurrency if you lose your phone or switch to another wallet.',
            'Keep the 12-word recovery phrase in a safe place and don’t share it with anyone.',
          ]}
        />
        <Stack>
          <CardBox style={{ borderRadius: 10 }}>
            <Stack direction='row' spacing={10} style={{ flexWrap: 'wrap' }}>
              {words.map((word, index) => <StyledText key={index} style={{ fontSize: 12, lineHeight: 16 }}>{word}</StyledText>)}
            </Stack>
          </CardBox>
          <Stack padding={16} spacing={16} style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={handleCopy}>
              <Stack direction='row' spacing={6}>
                <IconCopy />
                <StyledText style={{ fontSize: 12, lineHeight: 16 }}>
                  {copied ? 'Copied' : 'Copy'} to clipboard
                </StyledText>
              </Stack>
            </TouchableOpacity>
          </Stack>
        </Stack>
      </Stack>
      <LayoutBottom>
        <ButtonPrimary title='Continue' onPress={() => navigation.navigate(ROUTES.AUTH.CHECK_BACKUP_WALLET, {
          firstWord: words[0],
          lastWord: words[words.length - 1],
          words: [...words].sort((a, b) => 0.5 - Math.random()),
        })} />
      </LayoutBottom>
    </LayoutScreen>
  )
}

export default BackupWallet
