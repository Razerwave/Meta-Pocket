import { View, Text } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'
import { useTheme } from 'styled-components';

const IconExplore = ({color}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M6.88421 17.7474L13.7684 14.1789C13.8737 14.1579 13.9579 14.1158 14.0211 14.0526C14.0842 13.9895 14.1368 13.9053 14.1789 13.8L17.7158 6.91579C17.8421 6.70526 17.8211 6.52105 17.6526 6.36316C17.4842 6.20526 17.2947 6.17895 17.0842 6.28421L10.2 9.82105C10.0947 9.86316 10.0105 9.91579 9.94737 9.97895C9.88421 10.0421 9.8421 10.1263 9.82105 10.2316L6.25263 17.1158C6.14737 17.3263 6.17368 17.5105 6.33158 17.6684C6.48947 17.8263 6.67368 17.8526 6.88421 17.7474ZM12 13.2632C11.6421 13.2632 11.3421 13.1421 11.1 12.9C10.8579 12.6579 10.7368 12.3579 10.7368 12C10.7368 11.6421 10.8579 11.3421 11.1 11.1C11.3421 10.8579 11.6421 10.7368 12 10.7368C12.3579 10.7368 12.6579 10.8579 12.9 11.1C13.1421 11.3421 13.2632 11.6421 13.2632 12C13.2632 12.3579 13.1421 12.6579 12.9 12.9C12.6579 13.1421 12.3579 13.2632 12 13.2632ZM12 24C10.3579 24 8.80526 23.6842 7.3421 23.0526C5.87895 22.4211 4.60526 21.5632 3.52105 20.4789C2.43684 19.3947 1.57895 18.1211 0.947368 16.6579C0.315789 15.1947 0 13.6421 0 12C0 10.3579 0.315789 8.80526 0.947368 7.3421C1.57895 5.87895 2.43684 4.60526 3.52105 3.52105C4.60526 2.43684 5.87895 1.57895 7.3421 0.947368C8.80526 0.315789 10.3579 0 12 0C13.6421 0 15.1947 0.315789 16.6579 0.947368C18.1211 1.57895 19.3947 2.43684 20.4789 3.52105C21.5632 4.60526 22.4211 5.87895 23.0526 7.3421C23.6842 8.80526 24 10.3579 24 12C24 13.6421 23.6842 15.1947 23.0526 16.6579C22.4211 18.1211 21.5632 19.3947 20.4789 20.4789C19.3947 21.5632 18.1211 22.4211 16.6579 23.0526C15.1947 23.6842 13.6421 24 12 24ZM12 22.5789C14.9053 22.5789 17.3947 21.5421 19.4684 19.4684C21.5421 17.3947 22.5789 14.9053 22.5789 12C22.5789 9.09474 21.5421 6.60526 19.4684 4.53158C17.3947 2.45789 14.9053 1.42105 12 1.42105C9.09474 1.42105 6.60526 2.45789 4.53158 4.53158C2.45789 6.60526 1.42105 9.09474 1.42105 12C1.42105 14.9053 2.45789 17.3947 4.53158 19.4684C6.60526 21.5421 9.09474 22.5789 12 22.5789Z" fill={color} />
    </Svg>
  )
}

export default IconExplore