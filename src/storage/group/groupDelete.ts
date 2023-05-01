import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '../config'
import { groupsList } from './groupsList'

export const groupDelete = async (group: string) => {
  try {
    const storage = await groupsList()
    const groups = storage.filter((item) => item !== group)

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${group}`)
  } catch (error) {
    throw error
  }
}
