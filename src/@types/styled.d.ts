import 'styled-components';
import * as Theme from '~/theme';

declare module 'styled-components/native' {
  type ThemeType = typeof Theme.DefaultTheme;
  export interface DefaultTheme extends ThemeType {}
}