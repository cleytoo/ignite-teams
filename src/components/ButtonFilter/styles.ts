import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonFilterStyleProps = {
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)<ButtonFilterStyleProps>`
  ${({ theme, isActive }) => css`
    border: 1px solid transparent;
    border-color: ${isActive ? theme.COLORS.GREEN_700 : 'transparent'};
    border-radius: 4px;

    height: 38px;
    padding: 0 16px;
    align-items: center;
    justify-content: center;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    text-transform: uppercase;
  `}
`
