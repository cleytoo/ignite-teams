import { ButtonIcon } from '@components/ButtonIcon'
import * as S from './styles'

export type PlayerCardProps = {
  name: string
  onRemove: () => void
}

export const PlayerCard = ({ name, onRemove }: PlayerCardProps) => {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.TextName>{name}</S.TextName>

      <ButtonIcon icon="close" type="secondary" onPress={onRemove} />
    </S.Container>
  )
}
