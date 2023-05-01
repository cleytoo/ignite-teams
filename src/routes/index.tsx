import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { useTheme } from 'styled-components/native'

export const Routes = () => {
  const theme = useTheme()
  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
