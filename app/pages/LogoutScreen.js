import React, { Component, useState, useEffect} from 'react';
import { Container, Header, Button, Content, Card, Title, CardItem, Text, Toast, Icon,  Left, Right, Input, Label, Body, View } from 'native-base';
import * as api from '../api/ApiUtils';
import WaitScreen from '../components/WaitScreen';
import { tsAnyKeyword } from '@babel/types';
export default function ProfileScreen(props){
        const somefun = () => {
            api._userLogout().then(()=>this.props.navigation.navigate('AuthLoading'));
            alert("kjhjk");
        }
      return (<Button onPress={somefun()}></Button>);   
}