import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BodyHeading, CustomInput, CustomSearch, LayoutScreen, Stack } from '../../components'
import { NoticeBackground } from '../../assets/background'
import NoticeCard from '../../components/NoticeCard'

const NoticeList = () => {
  const handleSearch = (e) => {
    console.log("search", e.nativeEvent.text)
  }

  return (
    <LayoutScreen>
      <Stack paddingHorizontal={16} marginTop={4} spacing={20}>
        <CustomSearch
          placeholder={`Search`}
          onEndEditing={(e) => handleSearch(e)}
        />

        <Stack spacing={30}>
          <NoticeCard />
        </Stack>
      </Stack>
    </LayoutScreen>
  )
}

export default NoticeList

const styles = StyleSheet.create({})