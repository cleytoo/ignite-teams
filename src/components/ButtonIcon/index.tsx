import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { ButtonIconStylesProps, Container, Icon } from './styles'

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconStylesProps
}

export const ButtonIcon = ({
  icon,
  type = 'primary',
  ...rest
}: ButtonIconProps) => {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
}
