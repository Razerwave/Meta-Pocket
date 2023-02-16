import { StyleSheet, TouchableOpacity } from 'react-native'
import { BodyText, CustomSearch, InvoiceSheet, LayoutScreen, LayoutScroll, Stack } from '../../components'
import NoticeCard from '../../components/NoticeCard'
import { ROUTES } from '../../constants'
import { gray300 } from '../../constants/colors'
import { useAuth } from '../../context/AuthContext'

const NoticeList = ({ navigation }) => {
  const { i18n } = useAuth();

  const handleSearch = (e) => {
    console.log("search", e.nativeEvent.text)
  }

  return (
    <LayoutScreen>
      <Stack paddingHorizontal={16} marginTop={4} spacing={20} style={{ flex: 1 }}>
        {/* <InvoiceSheet /> */}
        <CustomSearch
          placeholder={`Search`}
          onEndEditing={(e) => handleSearch(e)}
        />

        <LayoutScroll>
          <Stack spacing={30}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((_, index) => (
              <TouchableOpacity key={index} onPress={() => navigation.navigate(ROUTES.SETTING.NOTICE, {
                title: i18n.metaVerseComingSoon,
              })}>
                <Stack spacing={10}>
                  <NoticeCard title={i18n.metaVerseComingSoon} />
                  <Stack spacing={6} marginHorizontal={10}>
                    <BodyText>
                      {i18n.metaVerseComingSoon}
                    </BodyText>
                    <BodyText type={5} style={{ color: gray300 }}>
                      Feb 7, 2023   |  조회수 2,300
                    </BodyText>
                  </Stack>
                </Stack>
              </TouchableOpacity>
            ))}
          </Stack>
        </LayoutScroll>
      </Stack>
    </LayoutScreen>
  )
}

export default NoticeList

const styles = StyleSheet.create({})