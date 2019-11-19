import React, { Component, useState, useEffect } from 'react';
import { Container, Header, Title, Content, Toast, Button, Left, Right, Body, Icon, Text, View, Spinner } from 'native-base';
import LoginCard from './LoginCard';
import SignupCard from './SignupCard';
import ForgotPassword from './ForgotPassword';
import * as api from '../api/ApiUtils';
import { styles } from '../styles/LoginCardStyles';

export default function LoginContainer(props){

    const {navigation} = props;
    const [pageopt, setOpt] = useState('login');
    const loginSubmit = async (username, password) => {
      setOpt('spinner');
      const resp = await api.loginApi(username, password);
      if(!resp.failed){
        Toast.show({text: "Logged in!"});
        navigation.navigate("App");
      }
      else{
        setOpt('login');
        Toast.show({text: resp.error});
      }
    }
    const signupSubmit = async (username, password, email) => {
        alert(username+password+email);
    }    
    const forgotPwHandle = async (email) => {
      alert(email);
    }

    const handlePageOpt = (page) => {
        setOpt(page);
    }
    return (

          
    <Container style={styles.container}>
    <Content padder style={styles.content}>
      
    {
      pageopt=='login'?<LoginCard 
            handleSubmit={loginSubmit}
            handlePageOpt={handlePageOpt}
          />:pageopt=='signup'?
          <SignupCard
            handleSubmit={signupSubmit}
            handlePageOpt={handlePageOpt}
          />:pageopt=='forgot'?
          <ForgotPassword
            handleSubmit={forgotPwHandle}
            handlePageOpt={handlePageOpt}
            />:<Spinner/>
    }
    
        
    </Content>
    </Container>

          
    );
}

