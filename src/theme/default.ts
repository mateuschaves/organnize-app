const theme = {
  colors: {
    brandPrimary: '#1B1C2C',
    brandGray: '#e8e8e9',
    brandDarkGray: '#8d8d95',
    brandBlack: '#000000',
    brandWhite: '#FFFFFF',
    brandRed: '#FF0000',
    textColor: '#363636',

    brandGreen: '#91F48F',
    brandYellow: '#FFF599',
    brandBlue: '#9EFFFF',
  },
  fonts: {
    regular: 'Roboto_400Regular',
    bold: 'Roboto_700Bold',
  },
  fontSizes: {
    small: '12px',
    medium: '14px',
    large: '16px',
    xlarge: '18px',
    xmedium: '20px',
    xxlarge: '24px',
    xxxlarge: '32px',
  },
} as const;

export default theme;