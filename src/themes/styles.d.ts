import 'styled-components';
import theme from './Light';

declare module 'styled-components'{
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType {}
}
