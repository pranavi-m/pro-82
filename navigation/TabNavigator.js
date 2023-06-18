import {React} from 'react';
import Feed from "../screens/Feed"
import CreatePost from "../screens/CreatePost"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
return(
    <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Feed') {
                  iconName = focused? 'book' : 'book-outline';
                }
                 else if (route.name === 'CreatePost') {
                  iconName = focused ? 'create' : 'create-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'black',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CreatePost" component={CreatePost} options={{headerShown:false}}/>
          </Tab.Navigator>
)
}

export default BottomTabNavigator









