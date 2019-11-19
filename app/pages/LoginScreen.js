import React, { Component } from 'react';
import LoginContainer from '../components/LoginContainer';
import WaitScreen from '../components/WaitScreen';
import * as api from '../api/ApiUtils';


export default function LoginScreen(props) {

    const {navigation} = props;

    return <LoginContainer navigation={navigation}/>;

}
