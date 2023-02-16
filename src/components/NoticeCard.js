import { StyleSheet, Text, View, Image } from 'react-native';
import { neutral300, white } from '../constants/colors';
import { BodyTextSize, BodyTextWeight, fontBody } from '../constants/fonts';

const NoticeCard = ({ imagePath, title }) => {
  return (
    <View style={styles.card}>
      {/* <NoticeStroke1 style={{ position: 'absolute', left: 0, bottom: 0 }} />
      <NoticeStroke2 style={{ position: 'absolute', left: 0, top: 0 }} />
      <NoticeStroke3 style={{ position: 'absolute', left: 43, top: 0 }} /> 
       <NoticeStorkStar style={{ position: 'absolute', bottom: 16, right: 17 }} /> */}
      <View style={styles.image}>
        {imagePath && <Image height={30} source={imagePath} />}
      </View>
      <Text style={styles.text} >
        {title}
      </Text>
    </View>
  )
}

export default NoticeCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: neutral300,
    borderRadius: 10,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    heihgt: 30,
    padding: 12,
    alignItems: 'center',
  },
  text: {
    fontFamily: fontBody,
    fontSize: BodyTextSize[4],
    fontWeight: BodyTextWeight[2],
    color: white,
  },
})