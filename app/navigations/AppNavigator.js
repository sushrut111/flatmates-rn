import React, { Component } from "react";

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../pages/LoginScreen';
import HomeScreen from '../pages/HomeScreen';
import AuthLoadingScreen from '../pages/AuthLoadingScreen';
import SideBar from '../sidebar/SideBar';
import ProfileScreen from "../pages/ProfileScreen";
import LogoutScreen from '../pages/LogoutScreen';
// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createDrawerNavigator({ 
  Home:{
    screen: HomeScreen,
  },
  Profile:{
    screen: ProfileScreen
  },
  Logout:{
    screen: LogoutScreen
  }
 },{
  drawerType: 'slide',
  contentComponent: props => <SideBar {...props} />
 });
const AuthStack = createStackNavigator({ 
  SignIn:{
    screen: LoginScreen,
    navigationOptions:{
      headerShown: false
    }
  } });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
      
    },
    
    
  )
);