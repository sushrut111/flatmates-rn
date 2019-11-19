import React, { Component, useState } from 'react';
import { Container, Header, Button, Content, Card, CardItem, Text, Body, Form,  Item, Input, Label, Separator, Left, Right, Row } from 'native-base';
import cardStyles, { styles } from '../styles/LoginCardStyles';
export default function LoginCard(props) {
  const {viewname, handleSubmit, handlePageOpt} = props;
  
  const [form, setValues] = useState({
    username : '',
    password : ''
  });
  const handleSubmitLocal = () => {
    handleSubmit(form.username, form.password);
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
  
  const pageChange = (page) => {
    handlePageOpt(page);
  }

  return (
    <Card style={styles.card}>
    <CardItem header bordered style={styles.cardItemTop}>
    <Text>LOGIN</Text>
    </CardItem>
    <CardItem>
    <Body >
    <Item>
    <Input placeholder="Username" autoCorrect={false} onChangeText={handleChangeUname}/>
    </Item>
    <Item last>
    <Input placeholder="Password" secureTextEntry={true} autoCorrect={false} onChangeText={handleChangePassword} />
    </Item>

    </Body>
    </CardItem>
    <CardItem style={styles.cardItem}>
      <Button onPress={handleSubmitLocal} rounded bordered>
        <Text>Log in</Text>
      </Button>
    </CardItem>
    <CardItem footer bordered style={styles.cardItemBottom} >
    <Row>
    <CardItem button onPress={() => pageChange('forgot')}><Text>Forgot password</Text></CardItem>
    <CardItem button onPress={()=>pageChange('signup')}><Text>Sign up</Text></CardItem>
    </Row>
    </CardItem>
    </Card>


    );
    
  }