import AsyncStorage from '@react-native-async-storage/async-storage'

import { PLAYER_COLLECTION } from '../config'

import { playersListByGroup } from './playersListByGroup'

export const playerRemoveByGroup = async (
  playerName: string,
  group: string
) => {
  try {
    const storage = await playersListByGroup(group)

    const playersAlreadyExists = storage.find(
      (player) => player.name === playerName
    )

    if (!playersAlreadyExists) {
      throw new Error('O jogador não está em nenhum time!')
    }

    const newStorage = storage.filter((player) => player.name !== playerName)

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify(newStorage)
    )
  } catch (error) {
    throw error
  }
}
