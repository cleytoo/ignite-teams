import { useState, useCallback } from 'react'

import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { FlatList } from 'react-native'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'

import * as S from './styles'
import { groupsList } from '@storage/group/groupsList'

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>([])

  const hasNotGroups = groups.length === 0

  const { navigate } = useNavigation()

  const handleNewGroup = () => navigate('newGroups')

  const handleGroupDetails = (group: string) => navigate('players', { group })

  const fetchGroups = async () => {
    try {
      const data = await groupsList()
      setGroups(data)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, [])
  )

  return (
    <S.Container>
      <Header />
      <Highlight title="Turma" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            activeOpacity={0.5}
            onPress={() => handleGroupDetails(item)}
          />
        )}
        contentContainerStyle={
          hasNotGroups && {
            flex: 1,
            justifyContent: 'center'
          }
        }
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        }
        showsVerticalScrollIndicator={false}
      />

      <Button label="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  )
}
