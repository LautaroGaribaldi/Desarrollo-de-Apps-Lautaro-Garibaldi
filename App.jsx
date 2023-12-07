import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, Modal } from "react-native";
import CustomModal from "./components/CustomModal";
import CustomInput from "./components/CustomInput";
import CustomFlatList from "./components/CustomFlatList";


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

    const onSelectItemHandler = (id) => {
        setIsModalVisible(!isModalVisible)
        setItemSelectedToDelete(itemList.find((item) => item.id === id))
    };

    const onDeleteItemHandler = () => {
        setItemList(itemList.filter((item) => item.id !== itemSelectedToDelete.id))
        setItemSelectedToDelete({})
        setIsModalVisible(!isModalVisible)
    };

    const renderListItem = ({ item }) => {
        return (
            <View style={styles.itemList}>
                <Text>{item.value}</Text>
                <Button title="X" onPress={() => onSelectItemHandler(item.id)} />
            </View>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <CustomInput
                    placeHolderProp="Ingresar Tarea"
                    textItemProp={textItem}
                    onChangeTextHandlerEvent={onChangeTextHandler}
                    addItemToListHandlerEvent={addItemToListHandler}
                />
                <CustomFlatList
                    itemListProp={itemList}
                    renderListItemEvent={renderListItem}
                />
            </View>
            <CustomModal
                animationTypeProp="slide"
                isVisibleProp={isModalVisible}
                itemSelectedProp={itemSelectedToDelete}
                onDeleteItemHandlerEvent={onDeleteItemHandler}
                setIsModalVisibleEvent={setIsModalVisible}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#38D2AD",
        padding: 30
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
});
