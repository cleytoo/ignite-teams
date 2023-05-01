import { useEffect, useRef, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Alert, FlatList, TextInput as Input, Keyboard } from 'react-native'

import { Loading } from '@components/Loading'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'
import { TextInput } from '@components/TextInput'
import { ButtonFilter } from '@components/ButtonFilter'
import { PlayerCard } from '@components/PlayerCard'
import { ListEmpty } from '@components/ListEmpty'

import { Button } from '@components/Button'
import { AppError } from '@utils/AppError'
import { playerAddbyGroup } from '@storage/player/playerAddbyGroup'
import { playerGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam'

import * as S from './styles'
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO'
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup'
import { groupDelete } from '@storage/group/groupDelete'

type RouteParams = {
  group: string
}

export const Players = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [team, setTeam] = useState('time a')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const [newPlayerName, setNewPlayerName] = useState('')

  const route = useRoute()
  const { navigate } = useNavigation()
  const { group } = route.params as RouteParams

  const inputRef = useRef<Input>(null)

  const handleAddPlayer = async () => {
    if (!newPlayerName.trim()) {
      return Alert.alert('Ops', 'Você precisa digitar o nome da pessoa!')
    }
    const newPlayer = {
      name: newPlayerName,
      team
    }
    try {
      await playerAddbyGroup(newPlayer, group)
      await loadPlayersByTeam()
      setNewPlayerName('')
      inputRef.current?.blur()
      // Keyboard.dismiss()
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Ops', error.message)
      } else {
        Alert.alert('Ops', 'Não foi possível adicionar a pessoa!')
      }
    }
  }

  const handleRemovePlayer = async (player: string) => {
    try {
      await playerRemoveByGroup(player, group)
      await loadPlayersByTeam()
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Ops', error.message)
      } else {
        Alert.alert('Ops', 'Não foi possível remover a pessoa!')
      }
    }
  }

  const handleDeleteGroup = () => {
    Alert.alert('Atenção', 'Deseja mesmo remover essa turma?', [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: async () => {
          await groupDelete(group)
          navigate('groups')
        }
      }
    ])
  }

  const loadPlayersByTeam = async () => {
    try {
      setIsLoading(true)
      const playersByTeam = await playerGetByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Não foi possível carregar as pessoas!')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadPlayersByTeam()
  }, [team])

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="Adicione a galera e separe os times" />
      <S.Form>
        <TextInput
          inputRef={inputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={['time a', 'time b']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ButtonFilter
              title={item}
              onPress={() => setTeam(item)}
              isActive={item === team}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 8 }}
        />
        <S.NumberOfPlayers>{players.length}</S.NumberOfPlayers>
      </S.HeaderList>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handleRemovePlayer(item.name)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { gap: 12, marginTop: 10, paddingBottom: 50 },
            !players.length && {
              flex: 1,
              justifyContent: 'center'
            }
          ]}
          ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time" />}
        />
      )}

      <Button
        label="Remover turma"
        colorScheme="secondary"
        onPress={handleDeleteGroup}
      />
    </S.Container>
  )
}
