import { View, Text, Modal, StyleSheet, Button } from 'react-native'
import React from 'react'

const CustomModal = ({
    animationTypeProp,
    isVisibleProp,
    itemSelectedProp,
    onDeleteItemHandlerEvent,
    setIsModalVisibleEvent
}) => {
    return (
        <Modal animationType={animationTypeProp} visible={isVisibleProp} transparent={true}>
            <View style={styles.modalConteiner}>
                <View style={styles.modalContent}>
                    <View style={styles.modalMessageConteiner}>
                        <Text>Se eliminara: </Text>
                        <Text>{itemSelectedProp.value}</Text>
                    </View>
                    <View style={styles.modalButtonConteiner}>
                        <Button title="Cancelar" onPress={() => setIsModalVisibleEvent(!isVisibleProp)} color="#ccc" />
                        <Button title="Eliminar" onPress={onDeleteItemHandlerEvent} color="#ef233c" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    modalConteiner: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center"
    },

    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        //elevation: 5,
        marginHorizontal: 40
    },

    modalMessageConteiner: {
        marginTop: 50,
        alignItems: "center"
    },
    modalButtonConteiner: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: 20
    }
});