import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const mainText = props => (
    <Text {...props} style={[styles.mainText, props.style]} >
        {props.children}
    </Text> 
);

const styles = StyleSheet.create({
    mainText: {
        color: "black",
        backgroundColor: "transparent",    
    },
});

export default mainText;
