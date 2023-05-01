import { playersListByGroup } from './playersListByGroup'

export const playerGetByGroupAndTeam = async (group: string, team: string) => {
  try {
    const storage = await playersListByGroup(group)

    const players = storage.filter((player) => player.team === team)

    return players
  } catch (error) {
    throw error
  }
}
