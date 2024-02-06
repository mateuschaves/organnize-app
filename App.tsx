import 'react-native-gesture-handler'
import RootStack from './src/routes/RootStack.route';
import { ThemeProvider } from 'styled-components';

import Theme from './src/theme/default';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <RootStack />
    </ThemeProvider>
  );
}
