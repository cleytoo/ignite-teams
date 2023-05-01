import { RefObject } from 'react'
import { TextInputProps, TextInput as Input } from 'react-native'
import { useTheme } from 'styled-components/native'

import * as S from './styles'

type Props = TextInputProps & {
  inputRef?: RefObject<Input>
}

export const TextInput = ({ inputRef, ...rest }: Props) => {
  const { COLORS } = useTheme()
  return (
    <S.Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  )
}
