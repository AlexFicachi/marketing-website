import React from 'react';
import { useTheme } from '@mui/material/styles';

const Logo = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette
  return (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="800px" height="200px" viewBox="0 0 800 200" preserveAspectRatio="xMidYMid meet">
    <g fill={mode === "dark" ? "#ffffff" : "#000000"}>
      <path d="M277.2 163.7 c-12.6 -1.5 -25.8 -10.1 -31.9 -20.5 -3 -5.1 -6.2 -16.1 -6.3 -21.4 0 -5 2.7 -16.4 5.2 -21.8 7.2 -15.7 19.3 -25.5 36.3 -29.5 9 -2 16.5 -1.9 24.6 0.5 9 2.7 15.4 7.2 21.1 14.8 5.7 7.5 8 14.7 8 24.7 -0.1 12.5 3.2 11.5 -36.4 11.5 l-34.1 0 0.7 4.1 c0.8 4.9 3.2 8.6 7.8 12.1 9.2 6.9 21.9 6.4 35 -1.5 l5.7 -3.5 5.3 6.1 c7.6 8.6 7.6 8.4 3.2 12.1 -11.5 9.5 -28.6 14.3 -44.2 12.3z m33.8 -59.7 c0 -5.2 -4.8 -11.9 -10.5 -14.8 -6.8 -3.4 -18.4 -1.7 -24.6 3.5 -4.2 3.6 -8.9 10.1 -8.9 12.5 0 1.7 1.3 1.8 22 1.8 l22 0 0 -3z"/>
      <path d="M596.2 163.8 c-10.9 -1.2 -17.7 -4.4 -25.6 -11.7 -10.1 -9.6 -13.1 -17.1 -13 -32.1 0.1 -8.9 0.5 -11.5 2.7 -16.9 5.6 -13.5 13.4 -22.2 25.2 -27.9 30.5 -14.9 64 -0.7 69.6 29.6 2.8 14.6 -3.9 34.2 -15.2 44.9 -10.9 10.3 -28.3 15.9 -43.7 14.1z m19 -24.9 c9.1 -4.6 14.3 -12.3 15.4 -22.5 0.5 -4.9 0.2 -6.9 -1.6 -11.2 -3.9 -9 -10.8 -13.2 -21.2 -12.9 -24.9 0.9 -35.4 33.2 -15.1 46.4 5.2 3.4 15.8 3.5 22.5 0.2z"/>
      <path d="M752.7 163.8 c-13.1 -1.9 -21.3 -10.2 -22.4 -22.8 -0.5 -5.2 1.3 -19.1 5.2 -41 0.7 -4.1 1.1 -7.8 0.8 -8.2 -0.2 -0.5 -4 -0.8 -8.4 -0.8 l-8.1 0 0.6 -4.7 c0.4 -2.7 0.9 -6.4 1.2 -8.3 1.2 -7.3 0.8 -7 9.8 -7 l8.2 0 1.7 -8.8 c0.9 -4.9 1.7 -9.8 1.7 -11 0 -2.1 0.4 -2.2 12.5 -2.2 7.7 0 12.5 0.4 12.5 1 0 0.5 -0.7 5.1 -1.6 10 -0.8 5 -1.2 9.5 -0.9 10 0.4 0.6 6.3 1 14.1 1 l13.5 0 -0.7 5.3 c-0.4 2.8 -1 7.2 -1.3 9.7 l-0.6 4.5 -14.2 0.3 c-11.9 0.2 -14.2 0.5 -14.7 1.9 -0.4 0.8 -1.3 6.1 -2.2 11.7 -0.8 5.5 -1.9 12.4 -2.4 15.1 -0.5 2.8 -0.9 7.4 -0.9 10.2 -0.1 4.4 0.4 5.8 2.8 8.5 2.7 3 3.2 3.2 9.2 3.1 3.4 -0.1 7.6 -0.5 9.2 -0.9 l3 -0.6 -0.6 4.7 c-0.4 2.6 -0.7 7.3 -0.7 10.4 l0 5.7 -4.2 1.2 c-6.5 1.9 -16.7 2.8 -22.1 2z"/>
      <path d="M481.1 162.1 c-6.1 -2.3 -11.1 -5.9 -14.3 -10.2 -1.2 -1.6 -2.5 -2.9 -2.9 -2.9 -0.4 0 -1.8 3.2 -3 7 l-2.2 7 -10.4 0 -10.3 0 0.6 -4.2 c0.3 -2.4 0.8 -4.9 1 -5.7 0.2 -0.7 1.8 -10.2 3.5 -21 1.7 -10.8 3.5 -22.3 4 -25.6 0.5 -3.3 1.6 -10.3 2.4 -15.5 0.8 -5.2 2.1 -13.5 3 -18.5 0.8 -4.9 2.2 -13.7 3 -19.5 2.2 -15.5 0.7 -14 14.7 -14 l12.1 0 -0.7 5.8 c-0.6 6 -0.7 6.5 -3.5 23.2 -1 5.8 -1.6 10.7 -1.4 11 0.2 0.2 1.6 -0.3 3.1 -1.3 8.9 -5.6 13.6 -7.1 23.2 -7.4 8.6 -0.2 10.1 0.1 15.8 2.6 8.2 3.7 16.1 11.4 20.3 20 2.8 5.6 3.3 7.8 3.7 16.1 1.1 23.3 -10.4 42.6 -30.8 51.8 -7.8 3.5 -23.1 4.1 -30.9 1.3z m22.6 -23.4 c4 -2.1 9.8 -7.8 11.6 -11.5 0.8 -1.5 2 -5 2.7 -7.9 2.5 -11 -4.1 -22.4 -15.2 -25.8 -5.1 -1.6 -6.3 -1.7 -11.4 -0.5 -20 4.8 -28.8 27.8 -16 41.8 6.1 6.7 19.5 8.5 28.3 3.9z"/>
      <path d="M105 160.8 c0 -1.3 0.5 -5 1 -8.3 0.6 -3.3 2.4 -14.8 4.1 -25.5 1.7 -10.7 3.4 -22 3.9 -25 0.5 -3 1.8 -11.6 3 -19 1.2 -7.4 2.5 -16.2 3.1 -19.5 1 -6 1.3 -8 2.7 -18.5 l0.7 -5.5 27.5 0 c30.2 0 31.4 0.2 44.8 6.8 7.9 3.8 19.8 14.8 23.5 21.6 6.9 12.6 9 26.5 6.1 40.6 -2.9 14.3 -13.2 30.8 -24.2 38.8 -17.6 12.9 -29.9 15.7 -69.4 15.7 l-26.8 0 0 -2.2z m61.3 -22.3 c8.5 -1.8 15.6 -5.6 21.8 -11.8 5.1 -5.1 10.2 -14.4 11.8 -21.6 4.3 -19.9 -8.2 -38.6 -28.7 -43 -7.5 -1.6 -22.7 -1.5 -24.1 0.2 -1 1.3 -1.7 4.9 -4.6 24.7 -0.7 5.2 -2.2 14.7 -3.3 21 -1.1 6.3 -2.3 14.2 -2.7 17.5 -0.4 3.3 -1.1 7.5 -1.5 9.4 -0.5 1.9 -0.7 3.8 -0.4 4.3 0.9 1.3 24.4 0.9 31.7 -0.7z"/>
      <path d="M365.5 162 c-0.3 -0.5 -0.8 -1.8 -1 -2.7 -0.3 -2 -2.5 -11.2 -8.5 -35.8 -2.1 -8.8 -4.1 -17.6 -4.5 -19.5 -0.3 -1.9 -1 -4.6 -1.5 -6 -0.4 -1.4 -1.8 -7 -3 -12.5 -1.2 -5.5 -2.6 -11 -3 -12.2 -0.9 -2.2 -0.8 -2.2 12.1 -2.5 7.2 -0.2 13.3 0 13.5 0.4 0.4 0.6 1.5 5.9 2.9 13.8 0.5 2.6 5.3 26.1 6.1 29.5 0.3 1.1 0.9 4.2 1.3 6.8 0.7 4.4 2.5 7.7 3.5 6.6 0.2 -0.2 5.1 -9.6 10.9 -20.9 5.8 -11.3 12.3 -23.9 14.6 -28 l4 -7.5 13.5 -0.3 c7.5 -0.1 13.6 0.1 13.6 0.5 0 0.4 -0.8 2.2 -1.8 3.8 -1 1.7 -3.2 5.5 -4.9 8.5 -1.6 3 -6.5 11.8 -10.8 19.5 -4.3 7.7 -8.8 15.8 -9.9 18 -1.2 2.2 -6.8 12.4 -12.5 22.8 l-10.3 18.7 -11.8 0 c-6.8 0 -12.1 -0.4 -12.5 -1z"/>
      <path d="M668.5 160.3 c0.4 -1.5 1.1 -5.3 1.5 -8.3 5 -32.4 6.5 -41.9 7.5 -48 0.2 -1.4 0.7 -4.3 1 -6.5 0.4 -2.2 2 -12.3 3.6 -22.5 1.6 -10.2 3.4 -21.6 4 -25.5 1.8 -11.5 0.3 -10.5 14.6 -10.5 l12.5 0 -0.6 2.4 c-0.3 1.3 -1 5.6 -1.6 9.7 -0.6 4.1 -1.9 13 -3.1 19.9 -1.1 6.9 -2.2 14.1 -2.5 16 -0.2 1.9 -1.6 10.5 -3 19 -1.4 8.5 -3.2 19.8 -3.9 25 -1.5 10.1 -3 19.7 -4.3 27 l-0.8 4.5 -12.8 0.3 -12.8 0.3 0.7 -2.8z"/>
    </g>
    <g fill="#ff9a00">
      <path d="M13.7 165.8 c17.8 -47.9 22.5 -61 21.8 -61.6 -0.3 -0.4 -6.4 -0.7 -13.5 -0.7 -10.1 0 -12.6 -0.3 -11.8 -1.2 0.6 -0.7 1.4 -1 1.9 -0.7 0.5 0.3 0.8 0.1 0.7 -0.4 -0.4 -1.5 33.3 -36.3 34.5 -35.5 0.6 0.3 0.7 0.1 0.3 -0.5 -0.4 -0.6 9 -10.8 22.4 -24.4 21.6 -22 22.9 -23 21.5 -18.8 -0.8 2.5 -1.9 5.4 -2.4 6.5 -1.5 3.2 -25.1 67 -25.1 67.7 0 0.4 6.1 0.9 13.6 1 l13.6 0.3 -2.8 2.5 c-1.5 1.4 -2.4 1.9 -1.9 1.1 0.5 -1 0.4 -1.2 -0.4 -0.7 -0.6 0.4 -0.9 1.1 -0.6 1.6 0.7 1.1 -73.3 76.6 -74.6 76.2 -0.6 -0.1 -0.8 0.2 -0.5 0.6 0.3 0.5 -0.3 1.7 -1.3 2.6 -1.4 1.2 0 -3.3 4.6 -15.6z"/>
      <path d="M468.9 154.3 l-3.4 -3.8 3.8 3.4 c2 1.9 3.7 3.6 3.7 3.8 0 0.8 -0.8 0 -4.1 -3.4z"/>
      <path d="M640 148.8 c2.4 -2.7 4.5 -4.8 4.7 -4.8 0.8 0 0 0.9 -4.4 5 l-4.8 4.5 4.5 -4.7z"/>
      <path d="M571.5 85 c2.1 -2.2 4.1 -4 4.4 -4 0.3 0 -1.3 1.8 -3.4 4 -2.1 2.2 -4.1 4 -4.4 4 -0.3 0 1.3 -1.8 3.4 -4z"/>
      <path d="M643.4 82.8 l-2.9 -3.3 3.3 2.9 c1.7 1.7 3.2 3.1 3.2 3.3 0 0.8 -0.8 0.1 -3.6 -2.9z"/>
      <path d="M726.8 71.3 c2.3 -0.2 5.9 -0.2 8 0 2 0.2 0.1 0.4 -4.3 0.4 -4.4 0 -6.1 -0.2 -3.7 -0.4z"/>
      <path d="M743 49.8 c0 -0.5 5.1 -0.7 11.3 -0.6 11.5 0.1 10.1 0.5 -3.6 1 -4.2 0.2 -7.7 0 -7.7 -0.4z"/>
    </g>
  </svg>
  );
};

export default Logo;