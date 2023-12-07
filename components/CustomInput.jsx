import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'

const CustomInput = ({
    placeHolderProp,
    textItemProp,
    onChangeTextHandlerEvent,
    addItemToListHandlerEvent
}) => {
    return (
        <View style={styles.inputConteiner}>
            <TextInput style={styles.textInput}
                placeholder={placeHolderProp}
                onChangeText={onChangeTextHandlerEvent}
                value={textItemProp} />
            <Button title="Add" onPress={addItemToListHandlerEvent} />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    inputConteiner: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 240
    },
    textInput: {
        width: 200,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
})