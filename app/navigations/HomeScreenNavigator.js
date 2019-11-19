import React, { Component } from "react";
import HomeScreen from "../pages/HomeScreen";
import SideBar from "../sidebar/SideBar";
import { DrawerNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    // Chat: { screen: MainScreenNavigator },
    // Profile: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;