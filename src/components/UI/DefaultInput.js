import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';

const DefaultInput = props => (
    <TextInput 
        underlineColorAndroid="transparent"
        {...props}
        style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid : null]} 
    /> 
);

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        marginTop: 8,
        marginBottom: 8,
    },
    invalid: {
        backgroundColor: "#f9c0c0",
        borderColor: "red"
    }
})

export default DefaultInput