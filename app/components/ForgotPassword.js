import React, { Component, useState } from 'react';
import { Container, Header, Button, Content, Card, CardItem, Text, Body, Form,  Item, Input, Label, Separator, Left, Right, Row } from 'native-base';
import {styles} from '../styles/LoginCardStyles';

export default function ForgotPassword(props) {
  const {viewname, handleSubmit, handlePageOpt} = props;
  
  const [form, setValues] = useState({
    username : '',
  });
  const handleSubmitLocal = () => {
    handleSubmit(form.username);
  }
  
  const handleChangeUname = (e) => {
    setValues({
      ...form,
      username: e
    });
  }

  const pageChange = (page) => {
    handlePageOpt(page);
  }

  return (
    <Card style={styles.card}>
    <CardItem header bordered style={styles.cardItemTop}>
    <Text>RESET PASSWORD</Text>
    </CardItem>
    <CardItem bordered>
    <Body >
    <Item>
    <Input placeholder="Email" autoCorrect={false} onChangeText={handleChangeUname}/>
    </Item>
    <CardItem style={styles.cardItem}>
      <Button onPress={handleSubmitLocal} rounded bordered>
        <Text>Reset password</Text>
      </Button>
    </CardItem>
    </Body>
    </CardItem>
    <CardItem footer bordered style={styles.cardItemBottom}>
    <Row>
    <CardItem button onPress={() => pageChange('login')}><Text>Login</Text></CardItem>
    <CardItem button onPress={()=>pageChange('signup')}><Text>Sign up</Text></CardItem>
    </Row>
    </CardItem>
    </Card>


    );
    
  }