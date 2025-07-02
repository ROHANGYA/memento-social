import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./routes";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/login/loginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/homeScreen";
import ChatScreen from "../screens/chat/chatScreen";
import NotificationScreen from "../screens/notification/notificationScreen";
import ProfileScreen from "../screens/profile/profileScreen";
import PostDetailScreen from "../screens/postDetails/postDetailsScreen";
import MementoBottomNavigationBar from "../components/mememtoBottomNavigationBar";

export type RootStackNavArguments = {
  [Routes.Login]: undefined;
  [Routes.Main]: undefined;
  [Routes.Home]: undefined;
  [Routes.Chat]: undefined;
  [Routes.Notification]: undefined;
  [Routes.Profile]: undefined;
  [Routes.PostDetails]: { postId: number };
};

export default function AppNavigation() {
  const stack = createNativeStackNavigator<RootStackNavArguments>();

  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName={Routes.Login}
        screenOptions={{ headerShown: false }}
      >
        <stack.Screen
          name={Routes.Login}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          /* The bottom Nav Bar */
          name={Routes.Main}
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name={Routes.PostDetails}
          component={PostDetailScreen}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

/**
 * Function that returns the bottom navigation component.
 */
function HomeTabs() {
  const navBar = createBottomTabNavigator<RootStackNavArguments>();
  return (
    <navBar.Navigator
      initialRouteName={Routes.Home}
      tabBar={MementoBottomNavigationBar}
    >
      <navBar.Screen
        name={Routes.Home}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <navBar.Screen
        name={Routes.Chat}
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <navBar.Screen
        name={Routes.Notification}
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <navBar.Screen
        name={Routes.Profile}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </navBar.Navigator>
  );
}
