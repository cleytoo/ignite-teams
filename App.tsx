import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import { Routes } from './src/routes'
import { Loading } from '@components/Loading'

import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
