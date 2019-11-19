import React, { Component, useState, useEffect} from 'react';
import { Container, Header, Button, Content, Card, Title, CardItem, Text, Toast, Icon,  Left, Right, Input, Label, Body, View } from 'native-base';
import * as api from '../api/ApiUtils';
import TaskCard from '../components/TaskCard';
import WaitScreen from '../components/WaitScreen';
export default function HomeScreen(props){


    const {navigation} = props;
    const [data, setData] = useState([]);
    const updateTask = (data) => {
      console.info(data);
      api.updateTask(data);
    }

    function loadData(){
      api.getTasks().then((data)=>{
        setData(data);
      });
    }

    useEffect(()=>{
      loadData();
    },[]);

    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>

<Header hasSubtitle>
      <Left>
        <Button transparent onPress={()=>{navigation.toggleDrawer()}}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Title</Title>
      </Body>
      <Right />
    </Header>
        <Content padder>
        {data?data.map((onedata)=><TaskCard remotedata={onedata} key={onedata.taskid} updateTask={updateTask}></TaskCard>):<WaitScreen/>}
        
        </Content>
      </View>
    );
}
