import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Requests } from '../screens/Requests';
import { Chat } from '../screens/Chat';
import { Profile } from '../screens/Profile';
import Dashboard from '../screens/Dashboard';
import { Notifications } from '../screens/Notifications';

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#292933',
        height: 60,
      },
    }}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Requests" component={Requests} />
      <Tab.Screen  name="Notifications" component={Notifications}   />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default HomeNavigation;
