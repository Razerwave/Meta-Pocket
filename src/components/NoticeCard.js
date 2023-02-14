import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NoticeBackground, NoticeStorkStar, NoticeStroke1, NoticeStroke2, NoticeStroke3 } from '../assets/background'
import { neutral300, red, white } from '../constants/colors'
import LayoutCenter from './layouts/LayoutCenter'
import Stack from './Stack'
import { BodyTextSize, BodyTextWeight, fontBody } from '../constants/fonts'
import BodyText from './texts/BodyText'

const ImagePath = require('../assets/images/Aleo.png')

const NoticeCard = () => {
  return (
    <Stack>
      <View style={styles.card}>
        {/* <NoticeStroke1 style={{ position: 'absolute', left: 0, bottom: 0 }} />
      <NoticeStroke2 style={{ position: 'absolute', left: 0, top: 0 }} />
      <NoticeStroke3 style={{ position: 'absolute', left: 43, top: 0 }} /> */}
        {/* <NoticeStorkStar style={{ position: 'absolute', bottom: 16, right: 17 }} /> */}
        <View style={styles.image}>
          <Image source={ImagePath} />
        </View>
        <Text style={styles.text} >
          ALEO Metaverse Coming Soon
        </Text>
      </View>
      <BodyText style={{ marginTop: 10, marginBottom: 6 }}>
        ALEO Metaverse Coming Soon
      </BodyText>
      <Stack direction='row' spacing={5}>
        <BodyText type={5}>Feb 7, 2023</BodyText>
        <BodyText type={5}>|</BodyText>
        <BodyText type={5}>조회수 2,300</BodyText>
      </Stack>
    </Stack>
  )
}

export default NoticeCard

const styles = StyleSheet.create({
  container: {
  },
  card: {
    backgroundColor: neutral300,
    borderRadius: 10,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 87,
    alignItems: 'center',
  },
  text: {
    fontFamily: fontBody,
    fontSize: BodyTextSize[4],
    fontWeight: BodyTextWeight[2],
    color: white,
  },
})