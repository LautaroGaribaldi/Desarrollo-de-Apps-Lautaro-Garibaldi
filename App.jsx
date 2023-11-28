import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, Modal } from "react-native";

export default function App() {
    const [textItem, setTextItem] = useState("");
    const [itemList, setItemList] = useState([]);
    const [itemSelectedToDelete, setItemSelectedToDelete] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false)
    const onChangeTextHandler = (text) => {
        setTextItem(text);
    };
    const addItemToListHandler = () => {
        setItemList(prevState => [...prevState, { id: Math.random().toString(), value: textItem }],
            console.log(itemList)),
            setTextItem("");
    };

    const renderListItem = ({ item }) => {
        return (
            <View style={styles.itemList}>
                <Text>{item.value}</Text>
                <Button title="X" />
            </View>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputConteiner}>
                    <TextInput style={styles.textInput}
                        placeholder="Ingresar tarea"
                        onChangeText={onChangeTextHandler}
                        value={textItem} />
                    <Button title="Add" onPress={addItemToListHandler} />
                </View>
                <FlatList data={itemList}
                    renderItem={renderListItem}
                    keyExtractor={item => item.id} />
            </View>
            <Modal animationType="slide" visible={isModalVisible}>
                <View style={styles.modalMessageConteiner}>
                    <Text>Se eliminara: </Text>
                    <Text>{itemSelectedToDelete.value}</Text>
                </View>
                <View style={styles.modalButtonConteiner}>
                    <Button title="Cancelar" color="#ccc" />
                    <Button title="Eliminar" color="#ef233c" />
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#38D2AD",
        padding: 30
    },
    inputConteiner: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textInput: {
        width: 200,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    itemList: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        margin: 10,
        backgroundColor: "#a2d2ff",
        borderRadius: 20,
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
