import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert, KeyboardAvoidingView, Platform } from 'react-native'

import * as S from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { TextInput } from '@components/TextInput'
import { groupCreate } from '@storage/group/groupCreate'
import { AppError } from '@utils/appError'

export const NewGroups = () => {
  const [group, setGroup] = useState('')

  const { navigate } = useNavigation()

  const handleNewGroup = async () => {
    try {
      if (!group.trim()) {
        throw new AppError('Informe o nome da turma')
      }
      await groupCreate(group.trim())
      navigate('players', { group: group.trim() })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Ops!', error.message)
      } else {
        Alert.alert('Ops!', 'Não foi possível criar a turma')
        console.log(error)
      }
    }
  }

  return (
    <S.Container>
      <Header showBackButton />

      <S.Content
        enabled={Platform.OS === 'ios' ? true : false}
        behavior="padding"
      >
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma pra adicionar as pessoas"
        />

        <TextInput
          placeholder="Nome da turma"
          onChangeText={setGroup}
          value={group}
        />
        <Button
          label="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </S.Content>
    </S.Container>
  )
}
