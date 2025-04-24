import React from "react";
import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather, FontAwesome6 } from "@expo/vector-icons";
import Home from "../screens/tabs/Home";
import Search from "../screens/tabs/Search";
import Profile from "../screens/tabs/Profile";
import Orders from "../screens/tabs/Orders";
import colors from "../../assets/colors";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={26}
              color={focused ? colors.green : colors.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="search"
              size={26}
              color={focused ? colors.green : colors.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="shopping-bag"
              size={26}
              color={focused ? colors.green : colors.grey}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={26}
              color={focused ? colors.green : colors.grey}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.lightGreen,
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 0,
    elevation: 10,
  },
  tabBarItemStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 10 : 20,
  },
});

export default MainTabNavigator;
