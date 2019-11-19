import React, { Component, useState } from 'react';
import { Container, Header, Button, Content, Card, CardItem, Text, Body, Form,  Item, Input, Label, Separator, Left, Right, Row } from 'native-base';
import {styles} from '../styles/LoginCardStyles';
export default function SignupCard(props) {
  const {viewname, handleSubmit, handlePageOpt} = props;
  
  const [form, setValues] = useState({
    username : '',
    password : '',
    email : '',
  });
  const handleSubmitLocal = () => {
    handleSubmit(form.username, form.password, form.email);
  }
  
  const handleChangeUname = (e) => {
    setValues({
      ...form,
      username: e
    });
  }
  const handleChangePassword = (e) => {
    setValues({
      ...form,
      password: e
    });
  }
  const handleChangeEmail = (e) => {
    setValues({
      ...form,
      email: e
    });
  }
  
  const pageChange = (page) => {
    handlePageOpt(page);
  }

  return (
    <Card style={styles.card}>
    <CardItem header bordered style={styles.cardItemTop}>
    <Text>SIGN UP</Text>
    </CardItem>
    <CardItem bordered>
    <Body >
    <Item>
    <Input placeholder="Username" autoCorrect={false} onChangeText={handleChangeUname}/>
    </Item>
    <Item>
    <Input placeholder="Email" autoCorrect={false} onChangeText={handleChangeEmail}/>
    </Item>
    <Item last>
    <Input placeholder="Password" secureTextEntry={true} autoCorrect={false} onChangeText={handleChangePassword} />
    </Item>
    <CardItem style={styles.cardItem}>
      <Button onPress={handleSubmitLocal} rounded bordered>
        <Text>Sign up</Text>
      </Button>
    </CardItem>
    </Body>
    </CardItem>
    <CardItem footer bordered style={styles.cardItemBottom}>
    <Row>
    <CardItem button onPress={()=>pageChange('login')}><Text>Login</Text></CardItem>
    <CardItem button onPress={() => pageChange('forgot')}><Text>Forgot password</Text></CardItem>
    </Row>
    </CardItem>
    </Card>


    );
    
  }