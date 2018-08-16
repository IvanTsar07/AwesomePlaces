import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const headingText = props => (
    <Text {...props} style={[styles.textHading, props.style]} >
        {props.children}
    </Text> 
);

const styles = StyleSheet.create({
    textHading: {
        fontSize: 28,
        fontWeight: "bold",
    },
});

export default headingText;
