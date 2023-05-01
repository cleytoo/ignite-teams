import { TouchableOpacity } from 'react-native'
import styled, {css} from 'styled-components/native'

export type ButtonColorSchemeProps = 'primary' | 'secondary'

type ButtonStyleProps = {
  colorScheme: ButtonColorSchemeProps
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, colorScheme }) =>
    colorScheme === 'primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Label = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`
