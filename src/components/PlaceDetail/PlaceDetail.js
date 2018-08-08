import React from 'react';
import { View, Text, StyleSheet, Image, Modal, Button, TouchableOpacity } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons"

const placeDetail = props => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage} />
                <Text style={styles.placeName} >{props.selectedPlace.name}</Text>
            </View>
        );
    }

    return (
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer} >
                {modalContent}
                <View style={styles.buttonContainer} >
                    <TouchableOpacity onPress={props.onItemDeleted} >
                        <View style={styles.deleteButton} >
                            <Icon size={30} name="ios-trash" color="red" />
                        </View>
                    </TouchableOpacity>
                   
                    <TouchableOpacity onPress={props.onModalClosed} >
                        <View style={styles.deleteButton} >
                            <Icon size={40} name="ios-close" color="blue" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );

};

const styles = StyleSheet.create({
    modalContainer: {
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
        heigt: 50
    },
    closeButton: {
        alignItems: 'center',
        width: 50,
        heigt: 50
    }
});

export default placeDetail;