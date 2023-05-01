import { ActivityIndicator } from 'react-native'

import * as S from './styles'

export const Loading = () => {
  return (
    <S.Container>
      <S.LoadIndicator size="large" />
    </S.Container>
  )
}
