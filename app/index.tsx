import { createStackNavigator } from "@react-navigation/stack";
import UserListScreen from "./screens/user-list";
import UserFormScreen from "./screens/user-form";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const StackNavigator = () => {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="UserList"
      screenOptions={{
        headerShown: true
      }}>
      <Stack.Screen
        name="UserList"
        options={({ navigation }) => ({
          title: "User List",
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: '700'
          },
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'gray'
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                //@ts-ignore
                navigation.navigate('UserForm')
              }}
            >
              <Ionicons
                name='add-circle'
                size={32}
                style={{ marginRight: 16, color: 'white' }}>
              </Ionicons>
            </TouchableOpacity>
          ),
        })
        }
        component={UserListScreen}>
      </Stack.Screen>
      <Stack.Screen
        name="UserForm"
        options={{
          title: "User Form",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: 'white',
            fontWeight: '700',
            fontSize: 22
          },
          headerStyle: {
            backgroundColor: 'gray',
          },
          headerTintColor: 'white'
        }}
        component={UserFormScreen}>
      </Stack.Screen>
    </Stack.Navigator>
  )
};

export default StackNavigator;