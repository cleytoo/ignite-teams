import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Groups } from '@screens/Groups'
import { NewGroups } from '@screens/NewGroups'
import { Players } from '@screens/Players'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName="groups"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="groups" component={Groups} />
      <Screen name="players" component={Players} />
      <Screen name="newGroups" component={NewGroups} />
    </Navigator>
  )
}
