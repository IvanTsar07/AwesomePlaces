import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput";
import HeadingText from "../../components/UI/HeadingText";
import MainText from "../../components/UI/MainText";
import backgroundImage from "../../assets/background.jpg";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground";

import validate from "../../utility/validation"

class AuthScreen extends Component {
    state = {
        viewMode: Dimensions.get("window").height > 500 ? "portraite" : "landscape",
        controls: {
            email: {
                value: "",
                valid: "",
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
            password: {
                value: "",
                valid: "",
                validationRules: {
                    minLength: 6
                },
                touched: false
            },
            confirmPassword: {
                value: "",
                valid: "",
                validationRules: {
                    equalTo: "password"
                },
                touched: false
            }
        }
    }

    constructor(props) {
        super(props);
        Dimensions.addEventListener("change", this.updateStyles)
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles)
    }

    updateStyles = (dims) => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portraite" : "landscape"
        })
    }

    loginHandler = () => {
        startMainTabs();
    }

    updateInputState = (key, value) => {
        let connectedValue = {};
        
        if (this.state.controls[key].validationRules.equalTo) {
            const equalControl = this.state.controls[key].validationRules.equalTo;
            const equalValue = this.state.controls[equalControl].value;

            connectedValue = {
                ...connectedValue,
                equalTo: equalValue
            }
        }

        if(key ==="password") {
            connectedValue = {
                ...connectedValue,
                equalTo: value
            }
        }

        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    confirmPassword: {
                        ...prevState.controls.confirmPassword,
                        valid: key === "password" 
                        ? validate(
                            prevState.controls.confirmPassword.value, 
                            prevState.controls.confirmPassword.value, 
                            connectedValue
                        )
                        : prevState.controls.confirmPassword.valid
                    },
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(
                            value, 
                            prevState.controls[key].validationRules, 
                            connectedValue
                        ),
                        touched: true
                    }
                }
            }
        })
    }

    render() {
        let headingText = null;

        if (this.state.viewMode === "portraite") {
            headingText = (
                <MainText>
                    <HeadingText style={styles.textHading}>Please Log In</HeadingText>
                </MainText>
            );
        }

        return (
            <ImageBackground
                source={backgroundImage}
                style={styles.backgroundImage}
            >
                <View style={styles.container}>

                    {headingText}

                    <ButtonWithBackground color="#29aaf4">
                        Switch To Login
                    </ButtonWithBackground>

                    <View style={styles.inputContainer}>
                        <DefaultInput
                            placeholder="Your E-Mail Address"
                            style={styles.input}
                            value={this.state.controls.email.value}
                            valid={this.state.controls.email.valid}
                            touched={this.state.controls.email.touched}
                            onChangeText={(val) => this.updateInputState("email", val)}
                        />

                        <View style={this.state.viewMode === "portraite" ? styles.portraitePasswordContainer : styles.landscapePasswordContainer}>
                            <View style={this.state.viewMode === "portraite" ? styles.portraitePasswordWrapper : styles.landscapePasswordWrapper}>
                                <DefaultInput
                                    placeholder="Password"
                                    style={styles.input}
                                    value={this.state.controls.password.value}
                                    valid={this.state.controls.password.valid}
                                    touched={this.state.controls.password.touched}
                                    onChangeText={(val) => this.updateInputState("password", val)}
                                />
                            </View>

                            <View style={this.state.viewMode === "portraite" ? styles.portraitePasswordWrapper : styles.landscapePasswordWrapper}>
                                <DefaultInput
                                    placeholder="Confirm Password"
                                    style={styles.input}
                                    value={this.state.controls.confirmPassword.value}
                                    valid={this.state.controls.confirmPassword.valid}
                                    touched={this.state.controls.confirmPassword.touched}
                                    onChangeText={(val) => this.updateInputState("confirmPassword", val)}
                                />
                            </View>
                        </View>
                    </View>

                    <ButtonWithBackground 
                        onPress={this.loginHandler} 
                        color="#29aaf4"
                        disabled={
                            !this.state.controls.confirmPassword.valid ||
                            !this.state.controls.email.valid ||
                            !this.state.controls.password.valid 
                        }
                    >
                        Submit
                    </ButtonWithBackground>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
    },
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    portraitePasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapePasswordWrapper: {
        width: "45%"
    },
    portraitePasswordWrapper: {
        width: "100%"
    }
});

export default AuthScreen