import React from 'react'
import { Path, Svg } from 'react-native-svg'
import { useTheme } from 'styled-components';

const IconYoutube = () => {
  const { fontColor, backgroundColor } = useTheme();
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill={fontColor} />
      <Path d="M18.4234 10.2844C18.4234 8.69023 17.1345 7.40137 15.5404 7.40137H8.17351C6.57939 7.40137 5.29053 8.69023 5.29053 10.2844V13.7168C5.29053 15.3109 6.57939 16.5998 8.17351 16.5998H15.5404C17.1345 16.5998 18.4234 15.3109 18.4234 13.7168V10.2844ZM14.0887 12.2583L10.7852 13.8932C10.6563 13.961 10.2153 13.866 10.2153 13.7236V10.3657C10.2153 10.2165 10.6563 10.1215 10.7919 10.1962L13.953 11.9192C14.0887 11.9938 14.2244 12.1837 14.0887 12.2583Z" fill={backgroundColor} />
    </Svg>
  )
}

export default IconYoutube