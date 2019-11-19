import React from 'react';
import * as api from '../api/ApiUtils';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  TextView,
  View,
} from 'react-native';



export default class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    api.is_logged_in()
    .then((userToken)=>{
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');

    })
  };

  render() {
    return (
      <View>
      </View>
    );
  }
}