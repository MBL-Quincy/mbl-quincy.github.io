import { lighten, darken } from 'polished'

export const siteTitle = 'Zilong LIANG'

export const maxWidth = 736

export const mediaQuery = {
  phone: `@media (max-width: ${maxWidth}px)`,
  desktop: `@media (min-width: ${maxWidth + 1}px)`
}

export const color = {
  gray1: '#1F2532',
  gray2: '#4B5362',
  gray3: '#727A88',
  gray4: '#A6AAB5',
  gray5: '#DCDFE5',
  gray6: '#F3F4F7',

  red: '#EB5757',
  orange: '#F2994A',
  yellow: '#F2C94C',
  green: '#27AE60',
  blue: darken(0.15, '#2F80ED'),
  lightBlue: '#2F80ED',
  cyan: lighten(0.25, '#56CCF2'),
  purple: '#9B51E0'
}

export const imageHost = '/images'
