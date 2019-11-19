import React, { Component, useState, useEffect, useRef } from 'react';
import { Container, Header, Button, Content,Grid, Row, Col, Card, CardItem,ListItem, Left,Icon,Body,Right,Switch, Text, Toast, Form,  Item, Input, Label, Separator, View } from 'native-base';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function TaskCard(props){
    const {remotedata, taskid, updateTask} = props;
    const [data, setData] = useState(remotedata);
    const [change, setChange] = useState(false);
    const firstRun = useRef(true);
    const setDoneData =  (e) =>{
        setData({
            ...data,
            done: e
        });

    }
    useEffect(()=>{
        if(firstRun.current){
            firstRun.current = false;
            return;
        }
        updateTask(data);
    },[data]);
    return (
        <Card style={{ borderRadius: 8 }}>
        <CardItem header bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
            <Left>
        <Text numberOfLines={1} style={{fontWeight: 'bold'}}>{data.name}</Text>
        </Left>
        <Right><Button bordered small><Icon active name="close" /></Button></Right>
        </CardItem>
        <CardItem bordered>
        <Body>
        <Row><Col><Text>Task</Text></Col><Col><Text>{data.name}</Text></Col></Row>
        <Row><Col><Text>Due date</Text></Col><Col><Text>{data.duedate}</Text></Col></Row>
        <Row><Col><Text>Creator</Text></Col><Col><Text>{data.author}</Text></Col></Row>
        <Row><Col><Text>Assignee</Text></Col><Col><Text>{data.assignee}</Text></Col></Row>
        </Body>
        </CardItem>
        <CardItem footer bordered style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
        <Left><Text>{data.created}</Text></Left>
        <Label>Done:</Label><Switch value={data.done} onValueChange={setDoneData} />
        </CardItem>
        </Card>
        );
    }