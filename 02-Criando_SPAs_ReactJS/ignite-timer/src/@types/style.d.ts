import 'styled-components'
import { themeDefault } from '../styles/theme/default'

type ThemeType = typeof themeDefault

declare module 'styled-components' {
  export interface DefatultTheme extends ThemeType {}
}
