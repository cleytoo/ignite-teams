import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/config'
import { groupsList } from './groupsList'
import { AppError } from '@utils/AppError'

export const groupCreate = async (newGroup: string) => {
  try {
    let storage = await groupsList()

    const groupAlreadyExists = storage.includes(newGroup)
    if (groupAlreadyExists) {
      throw new AppError('Grupo com o mesmo nome já existe!')
    }

    storage = [...storage, newGroup]
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(storage))
  } catch (error) {
    throw error
  }
}
