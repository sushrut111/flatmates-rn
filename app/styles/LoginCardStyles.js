import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
    container: {                                                         
        backgroundColor:'#3399ff',
    },
    content: {
        marginTop:'50%',
    },
    message: {                                                            
      fontSize: 18
    },
    warning: {
      color: 'red'                                                        
    },
    card: {
        borderRadius: 8,
    },
    cardItem: {
        justifyContent:'center',
        alignSelf:'center',
    },  
    cardItemTop: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        justifyContent:'center',
        // alignSelf:'center',
    },
    cardItemBottom: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent:'center',
        // alignSelf: "center",
    }
  });