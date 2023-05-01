import { TouchableOpacityProps } from 'react-native'
import * as S from './styles'

type ButtonProps = TouchableOpacityProps & {
  label: string
  colorScheme?: S.ButtonColorSchemeProps
}

export const Button = ({
  label,
  colorScheme = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <S.Container colorScheme={colorScheme} {...rest}>
      <S.Label>{label}</S.Label>
    </S.Container>
  )
}
