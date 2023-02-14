import { StyleSheet } from 'react-native'
import { BodyText, LayoutScreen, LayoutScroll, Stack } from '../../components'
import NoticeCard from '../../components/NoticeCard'

const text = "Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet. Set a 6-digit passcode to unlock your wallet. This passcode can’t be used to recover your wallet."

const NoticeScreen = ({ route }) => {
  return (
    <LayoutScreen>
      <Stack marginHorizontal={16} marginTop={6} spacing={30} style={{ flex: 1 }}>
        <NoticeCard title={route.params.title} />

        <Stack marginHorizontal={12} spacing={20} style={{ flex: 1 }}>
          <BodyText style={{ fontSize: 16, fontWeight: 600 }}>
            {route.params.title}
          </BodyText>
          <LayoutScroll>
            <Stack spacing={20}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => (
                <BodyText key={index}>{text}</BodyText>
              ))}
            </Stack>
          </LayoutScroll>
        </Stack>
      </Stack>
    </LayoutScreen>
  )
}

export default NoticeScreen

const styles = StyleSheet.create({})