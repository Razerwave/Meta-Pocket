import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BodyHeading, CustomInput, CustomSearch, LayoutScreen } from '../../components'

const NoticeList = () => {
  return (
    <LayoutScreen>
      <BodyHeading>
        Title
      </BodyHeading>
      <CustomInput />
      <CustomSearch />
    </LayoutScreen>
  )
}

export default NoticeList

const styles = StyleSheet.create({})