import React from 'react';
import {Root} from 'native-base';
import AppNavigator from './navigations/AppNavigator';
export default class App extends React.Component {
  render() {
       return (
         <Root>
            <AppNavigator/>
          </Root>
          );    
  }
}