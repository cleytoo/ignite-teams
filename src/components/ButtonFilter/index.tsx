import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

type ButtonFilterProps = TouchableOpacityProps &
  S.ButtonFilterStyleProps & {
    title: string
  }

export const ButtonFilter = ({
  title,
  isActive = false,
  ...rest
}: ButtonFilterProps) => {
  return (
    <S.Container isActive={isActive} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
