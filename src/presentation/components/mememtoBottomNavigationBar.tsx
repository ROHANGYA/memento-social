import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { CommonActions } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { Routes } from "../navigation/routes";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

function MementoBottomNavigationBar({
  navigation,
  state,
  descriptors,
  insets,
}: BottomTabBarProps) {
  return (
    <BottomNavigation.Bar
      navigationState={state}
      safeAreaInsets={insets}
      onTabPress={({ route, preventDefault }) => {
        const event = navigation.emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) {
          preventDefault();
        } else {
          navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
          });
        }
      }}
      renderIcon={({ route, focused, color }) => {
        switch (route.name) {
          case Routes.Home:
            return <AntDesign name="home" size={24} color={color} />;
          case Routes.Chat:
            return (
              <Ionicons name="chatbubbles-outline" size={24} color={color} />
            );
          case Routes.Notification:
            return (
              <Ionicons name="notifications-outline" size={24} color={color} />
            );
          case Routes.Profile:
            return (
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={24}
                color={color}
              />
            );
        }
      }}
      getLabelText={({ route }) => {
        const { options } = descriptors[route.key];
        const label =
          typeof options.tabBarLabel === "string"
            ? options.tabBarLabel
            : typeof options.title === "string"
            ? options.title
            : route.name;

        return label;
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 80,
  },
});

export default MementoBottomNavigationBar;
