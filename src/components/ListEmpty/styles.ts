import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`

export const Message = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`
