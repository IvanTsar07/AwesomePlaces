import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Icon from "react-native-vector-icons/Ionicons"
import { deletePlace } from '../../store/actions/index';

class PlaceDetail extends Component {
    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop();
    }
    
    render() {
        return (
            <View style={styles.container} >
                <View>
                    <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
                    <Text style={styles.placeName} >{this.props.selectedPlace.name}</Text>
                </View>

                <View style={styles.buttonContainer} >
                    <TouchableOpacity onPress={this.placeDeletedHandler} >
                        <View style={styles.deleteButton} >
                            <Icon size={30} name="ios-trash" color="red" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 22,
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 28
    },
    buttonContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: "row",
        marginTop: 20
    },
    deleteButton: {
        alignItems: 'center',
        width: 50,
        height: 50
    },
    closeButton: {
        alignItems: 'center',
        width: 50,
        height: 50
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);