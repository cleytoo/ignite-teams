import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppError } from '@utils/AppError'

import { PLAYER_COLLECTION } from '../config'

import { PlayerStorageDTO } from './PlayerStorageDTO'
import { playersListByGroup } from './playersListByGroup'

export const playerAddbyGroup = async (
  newPlayer: PlayerStorageDTO,
  group: string
) => {
  try {
    const storage = await playersListByGroup(group)

    const playersAlreadyExists = storage.find(
      (player) => player.name === newPlayer.name
    )

    if (playersAlreadyExists) {
      throw new AppError('O jogador já está em algum time!')
    }

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify([...storage, newPlayer])
    )
  } catch (error) {
    throw error
  }
}
