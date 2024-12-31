import { ThemeConfig } from 'styled-components'

export const lightTheme: ThemeConfig = {
  colors: {
    primary: '#1FC7D4',
    secondary: '#7645D9',
    background: '#FAF9FA',
    backgroundAlt: '#FFFFFF',
    cardBorder: '#E7E3EB',
    contrast: '#191326',
    dropdown: '#F6F6F6',
    dropdownDeep: '#EEEEEE',
    invertedContrast: '#FFFFFF',
    input: '#eeeaf4',
    inputSecondary: '#d7caec',
    tertiary: '#EFF4F5',
    text: '#280D5F',
    textDisabled: '#BDC2C4',
    textSubtle: '#7A6EAA',
    disabled: '#E9EAEB',
    gradients: {
      bubblegum: 'linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)',
      inverseBubblegum: 'linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)',
      cardHeader: 'linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)',
      blue: 'linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)',
      violet: 'linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)',
      violetAlt: 'linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)',
    },
  },
  shadows: {
    level1: '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
    active: '0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)',
    success: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
    warning: '0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
    focus: '0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)',
  },
  mediaQueries: {
    xs: '@media screen and (min-width: 370px)',
    sm: '@media screen and (min-width: 576px)',
    md: '@media screen and (min-width: 852px)',
    lg: '@media screen and (min-width: 968px)',
    xl: '@media screen and (min-width: 1080px)',
    xxl: '@media screen and (min-width: 1200px)',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  radii: {
    small: '4px',
    default: '16px',
    card: '24px',
    circle: '50%',
  },
  zIndices: {
    dropdown: 10,
    modal: 100,
  },
}

export const darkTheme: ThemeConfig = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#08060B',
    backgroundAlt: '#27262c',
    cardBorder: '#383241',
    contrast: '#FFFFFF',
    dropdown: '#1E1D20',
    dropdownDeep: '#100C18',
    invertedContrast: '#191326',
    input: '#372F47',
    inputSecondary: '#262130',
    tertiary: '#353547',
    text: '#F4EEFF',
    textDisabled: '#666171',
    textSubtle: '#B8ADD2',
    disabled: '#524B63',
    gradients: {
      bubblegum: 'linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)',
      inverseBubblegum: 'linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)',
      cardHeader: 'linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)',
      blue: 'linear-gradient(180deg, #00707F 0%, #19778C 100%)',
      violet: 'linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)',
      violetAlt: 'linear-gradient(180deg, #434575 0%, #66578D 100%)',
    },
  },
}
