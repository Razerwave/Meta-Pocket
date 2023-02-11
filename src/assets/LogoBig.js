import React from 'react'
import { Path, Svg } from 'react-native-svg'

const LogoBig = ({ fill }) => {
  return (
    <Svg width="117" height="113" viewBox="0 0 117 113" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <Path opacity="0.8" d="M39.926 46.8648L77.9867 82.5262C80.1549 84.5578 83.5523 84.4546 85.575 82.2958L106.929 59.5052C108.952 57.3464 108.834 53.9494 106.666 51.9179L68.6049 16.2565C66.4367 14.2249 63.0393 14.3281 61.0165 16.4869L39.6626 39.2775C37.6399 41.4363 37.7578 44.8332 39.926 46.8648Z" fill="#497CFF" />
      <Path d="M79.2172 30.8262C82.4269 27.4005 82.2519 22.0215 78.8262 18.8117C75.4005 15.602 70.0215 15.7771 66.8117 19.2027C63.602 22.6284 63.7771 28.0074 67.2027 31.2172C70.6284 34.4269 76.0075 34.2518 79.2172 30.8262Z" fill="#FFE600" />
      <Path d="M76.716 10.486C78.6041 8.47089 78.5011 5.30674 76.486 3.41866C74.4709 1.53059 71.3067 1.63356 69.4187 3.64866C67.5306 5.66376 67.6336 8.82791 69.6487 10.716C71.6638 12.6041 74.8279 12.5011 76.716 10.486Z" fill="#DADF00" />
      <Path d="M59.5012 9.34018C60.8228 7.92961 60.7508 5.71471 59.3402 4.39305C57.9296 3.0714 55.7147 3.14348 54.3931 4.55405C53.0714 5.96462 53.1435 8.17953 54.5541 9.50118C55.9646 10.8228 58.1795 10.7508 59.5012 9.34018Z" fill="#FFA60B" />
      <Path opacity="0.8" d="M57.2861 52.4296L78.2875 82.684C78.6948 83.2669 79.2384 83.7453 79.9034 84.0122C81.6064 84.6941 83.5159 84.4933 84.8912 83.0255L107.584 58.8057C109.269 57.008 109.346 54.7736 107.86 52.6378L86.3598 22.117C85.5057 20.8909 84.0461 20.1814 82.5067 20.4038C81.517 20.545 80.5456 21.0286 79.7883 21.8367L57.1031 46.0482C55.4998 47.7593 55.4164 50.3138 56.8534 51.908C57.0054 52.0736 57.1535 52.2433 57.2827 52.4264L57.2861 52.4296Z" fill="#AEC7FF" />
      <Path d="M4.62299 112H0.812988V90.7H8.31299C11.073 90.7 13.183 91.26 14.643 92.38C16.103 93.5 16.833 95.12 16.833 97.24C16.833 99.38 16.043 101.06 14.463 102.28C12.883 103.48 10.583 104.08 7.56299 104.08H4.62299V112ZM8.16299 93.88H4.62299V100.87H7.77299C9.57299 100.87 10.883 100.58 11.703 100C12.523 99.42 12.933 98.52 12.933 97.3C12.933 96.08 12.543 95.21 11.763 94.69C11.003 94.15 9.80299 93.88 8.16299 93.88Z" />
      <Path d="M29.0137 112.27C26.8537 112.29 25.0037 111.89 23.4637 111.07C21.9237 110.23 20.7437 109.02 19.9237 107.44C19.1037 105.86 18.6937 103.96 18.6937 101.74C18.6937 99.52 19.1337 97.56 20.0137 95.86C20.8937 94.14 22.1337 92.8 23.7337 91.84C25.3537 90.88 27.2637 90.4 29.4637 90.4C31.4237 90.4 33.1437 90.84 34.6237 91.72C36.1037 92.6 37.2537 93.83 38.0737 95.41C38.8937 96.97 39.3037 98.81 39.3037 100.93C39.3037 103.23 38.8537 105.23 37.9537 106.93C37.0737 108.61 35.8537 109.92 34.2937 110.86C32.7537 111.8 30.9937 112.27 29.0137 112.27ZM28.8937 108.76C30.1537 108.76 31.2637 108.45 32.2237 107.83C33.2037 107.21 33.9637 106.32 34.5037 105.16C35.0637 104 35.3437 102.59 35.3437 100.93C35.3437 98.79 34.8037 97.08 33.7237 95.8C32.6437 94.52 31.1937 93.88 29.3737 93.88C28.0737 93.88 26.9137 94.21 25.8937 94.87C24.8937 95.53 24.1037 96.44 23.5237 97.6C22.9437 98.76 22.6537 100.12 22.6537 101.68C22.6537 103.94 23.2037 105.69 24.3037 106.93C25.4237 108.15 26.9537 108.76 28.8937 108.76Z" />
      <Path d="M60.914 107.86C60.074 109.28 58.914 110.37 57.434 111.13C55.954 111.89 54.294 112.27 52.454 112.27C50.274 112.27 48.404 111.85 46.844 111.01C45.284 110.17 44.084 108.97 43.244 107.41C42.424 105.83 42.014 103.95 42.014 101.77C42.014 99.51 42.474 97.53 43.394 95.83C44.314 94.13 45.594 92.8 47.234 91.84C48.874 90.88 50.774 90.4 52.934 90.4C54.774 90.4 56.344 90.75 57.644 91.45C58.964 92.15 60.064 93.21 60.944 94.63L57.944 96.79C57.404 95.79 56.694 95.06 55.814 94.6C54.934 94.14 53.964 93.91 52.904 93.91C51.544 93.91 50.344 94.24 49.304 94.9C48.264 95.56 47.444 96.48 46.844 97.66C46.264 98.82 45.974 100.17 45.974 101.71C45.974 103.93 46.544 105.66 47.684 106.9C48.844 108.14 50.454 108.76 52.514 108.76C53.654 108.76 54.704 108.5 55.664 107.98C56.624 107.46 57.404 106.67 58.004 105.61L60.914 107.86Z" />
      <Path d="M62.8931 112V90.7H66.7931V100.21L75.6431 90.7H80.3831L70.3631 101.32C71.2031 101.76 71.9231 102.46 72.5231 103.42L74.9231 107.14C75.3431 107.78 75.7531 108.22 76.1531 108.46C76.5531 108.7 77.0531 108.82 77.6531 108.82C78.3731 108.82 79.0031 108.64 79.5431 108.28L80.4431 111.31C80.0631 111.61 79.5731 111.84 78.9731 112C78.3931 112.18 77.7831 112.27 77.1431 112.27C74.8831 112.27 73.1231 111.28 71.8631 109.3L68.7731 104.56C68.4931 104.14 68.2031 103.82 67.9031 103.6C67.6231 103.36 67.2531 103.19 66.7931 103.09V112H62.8931Z" />
      <Path d="M95.4995 94.06H85.5995V99.55H95.0195V102.91H85.5995V108.64H95.8596L95.5895 112H81.7896V90.7H95.4995V94.06Z" />
      <Path d="M114.085 90.7L113.605 94.12H107.005V112H103.105V94.12H96.2653V90.7H114.085Z" />
      <Path d="M0.635742 78L1.15774 65.22H2.83174L7.67374 75.732L12.5157 65.22H14.1897L14.6217 78H12.8757L12.5697 68.874L8.33974 78H6.88174L2.72374 68.928L2.32774 78H0.635742Z" />
      <Path d="M25.1311 66.786H19.1371V70.746H24.9151V72.312H19.1371V76.434H25.3651L25.2211 78H17.3551V65.22H25.1311V66.786Z" />
      <Path d="M35.8066 65.22L35.6266 66.804H31.5766V78H29.7586V66.804H25.6006V65.22H35.8066Z" />
      <Path d="M34.4617 78L39.8437 65.22H41.3917L46.5577 78H44.7037L43.4617 74.814H37.6117L36.3157 78H34.4617ZM38.2417 73.266H42.8677L40.5997 67.452L38.2417 73.266Z" />
    </Svg>
  )
}

export default LogoBig