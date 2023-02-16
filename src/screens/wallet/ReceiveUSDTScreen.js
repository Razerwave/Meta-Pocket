import { StyleSheet, Modal, TouchableOpacity, View } from 'react-native'
import { BodyHeading, BodyText, ButtonGray, ButtonPrimary, Divider, LayoutScreen, LayoutScroll, Stack } from '../../components'
import { textToSentences } from '../../utils/formats'
import { useAuth } from '../../context/AuthContext'
import { IconReceiveUSDT } from '../../assets/icons'
import { useEffect, useState } from 'react'
import { useTheme } from "styled-components"

const ReceiveUSDTScreen = () => {
  const { i18n } = useAuth()
  const { card: { bgColor }, fontColor } = useTheme()
  const [modalVisible, setModalVisible] = useState(false)
  const [options, setOptions] = useState([
    { label: 'ERC 20' },
    { label: 'BEP 20' },
  ])
  const [chosen, setChosen] = useState('')

  useEffect(() => {
    setModalVisible(true)
  }, [])

  return (
    <LayoutScreen>
      <LayoutScroll>
        <Stack alignItems="center" marginTop={48}>
          <IconReceiveUSDT />
          <Stack alignItems="center" marginTop={65}>
            {textToSentences(i18n.chooseOnlyUsdtWarning).map((text, index) => <BodyText key={index} type={5}>{text}</BodyText>)}
          </Stack>
        </Stack>
      </LayoutScroll>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={[styles.centeredView, { backgroundColor: bgColor }]}>
          <View style={styles.body}>
            <BodyHeading style={styles.heading}>{i18n.chooseNetwork}</BodyHeading>
            {options.map(({ label }, index) => (
              <TouchableOpacity key={index} onPress={() => setChosen(label)}>
                <Stack direction='row' spacing={10} alignItems="center" padding={16}>
                  <View style={radioStyles.radioOuter}>
                    <View style={[radioStyles.radioInner, { borderColor: fontColor }]}>
                      {chosen === label && <View style={[radioStyles.active, { backgroundColor: fontColor }]} />}
                    </View>
                  </View>
                  <BodyText>{label}</BodyText>
                </Stack>
                <Divider />
              </TouchableOpacity>
            ))}
            <Stack marginTop={100} direction="row" spacing={10}>
              <Stack style={{ flex: 1 }}>
                <ButtonGray title={i18n.cancel} onPress={() => setModalVisible(false)} />
              </Stack>
              <Stack style={{ flex: 1 }}>
                <ButtonPrimary title={i18n.ok} onPress={() => setModalVisible(false)} />
              </Stack>
            </Stack>
          </View>
        </View>
      </Modal>
    </LayoutScreen>
  )
}

export default ReceiveUSDTScreen

const radioStyles = StyleSheet.create({
  radioOuter: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  radioInner: {
    width: '100%',
    height: '100%',
    borderRadius: 9999,
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center'
  },
  active: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
})

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    borderRadius: 30,
  },
  btnClose: {
    position: 'absolute',
    top: 30,
    right: 30,
    zIndex: 1,
  },
  heading: {
    marginBottom: 20,
  },
  body: {
    paddingHorizontal: 28,
    paddingVertical: 42,
  },
})