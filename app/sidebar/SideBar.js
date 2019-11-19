import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem, Left, Body, Right, Icon } from "native-base";
import * as api from '../api/ApiUtils';

export default function SideBar (props) {
    const {navigation} = props;
    const handleNav = (screen) => {
        if(screen=='AuthLoading'){
            api._userLogout();
        }
        navigation.navigate(screen);
    }

    return (
      <Container>
        <Content>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcBtoiXTjAr-39IJ1ey6m5xi94ct8aBHVOicao-h4h3KqVzEpi"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}/>
            

        <List>
        <ListItem thumbnail button onPress={()=>handleNav('Home')}>
                <Left><Icon name="home"/></Left>
                <Body><Text>Home</Text></Body>
            </ListItem>
            <ListItem thumbnail button onPress={()=>handleNav('Profile')}>
                <Left><Icon name="person"/></Left>
                <Body><Text>Profile</Text></Body>
            </ListItem>
            <ListItem thumbnail button onPress={()=>handleNav('AuthLoading')}>
                <Left><Icon name="ios-log-out"/></Left>
                <Body><Text>Log Out</Text></Body>
            </ListItem>
        </List>
        </Content>
      </Container>
    );
}
