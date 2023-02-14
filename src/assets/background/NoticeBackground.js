import { View, Text } from 'react-native'
import React from 'react'
import { Defs, G, Path, Rect, Svg } from 'react-native-svg'

const NoticeBackground = () => {
  return (
    <Svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* <G filter="url(#filter0_d_552_19643)">
        <Rect x="12" y="12" width="340" height="60" rx="10" fill="#262637" />
      </G> */}
      <G style="mix-blend-mode:overlay" opacity="0.2">
        <Path d="M55 72H67.7078C85.4957 57.1515 106.303 53.8785 140.427 49.1882C165.257 45.7751 178.795 28.7252 186 15.236V12C178.78 25.0982 164.8 42.3786 138.692 44.1594C98.3173 46.914 72.4326 49.6733 55 72Z" fill="white" />
      </G>
      <Path d="M329.601 46.227L329.628 49.5492L330.326 45.9534L332.374 47.7757L330.771 45.6535L334.42 45.6359L330.759 44.9391L332.607 42.9322L330.452 44.5016L330.423 40.9152L329.725 44.511L327.678 42.6887L329.281 44.8109L325.632 44.8285L328.664 45.4053C328.155 45.7876 327.623 46.2275 327.467 46.326C325.681 47.4559 323.801 48.4469 321.861 49.2901C317.841 51.036 313.524 52.1621 309.128 52.4229C304.305 52.7093 299.64 51.8414 295.137 50.1407C306.383 54.7815 319.647 53.1707 329.601 46.227Z" fill="white" />
      <Path style="mix-blend-mode:overlay" opacity="0.4" d="M59.0453 36.5388C54.4113 37.7219 48.0869 35.0446 44.0667 35.2778C39.6367 35.535 40.1695 38.2794 38.1605 38.1769C33.3875 37.9335 26.8005 32.4801 19.2785 32.1014C16.1493 31.9436 14.0935 32.3597 12.0004 34.4497V72H32.8619C34.227 69.2602 32.2408 66.4344 33.9515 64.993C37.5176 61.9878 39.5775 63.1407 50.0394 61.7844C60.5007 60.4281 66.038 45.5917 68.9883 40.6154L59.0453 36.5388Z" fill="white" />
      {/* <Defs>
        <filter id="filter0_d_552_19643" x="0" y="0" width="364" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_19643" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_19643" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_552_19643" x1="61.9888" y1="34.173" x2="7.40402" y2="60.7287" gradientUnits="userSpaceOnUse">
          <stop offset="0.13" stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.2" />
        </linearGradient>
        <linearGradient id="paint1_linear_552_19643" x1="24.6588" y1="45.434" x2="24.6506" y2="45.434" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint2_linear_552_19643" x1="76.427" y1="26.4747" x2="49.8739" y2="51.4542" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="#272E8D" />
        </linearGradient>
      </Defs> */}
    </Svg>

  )
}

export default NoticeBackground