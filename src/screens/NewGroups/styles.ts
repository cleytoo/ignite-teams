import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import { FontAwesome5 } from '@expo/vector-icons'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
`

export const Icon = styled(FontAwesome5).attrs(({ theme }) => ({
  name: 'users',
  size: 56,
  color: theme.COLORS.GREEN_700
}))`
  align-self: center;
`
