import { FlatList, } from 'react-native'
import React from 'react'

const CustomFlatList = ({
    itemListProp,
    renderListItemEvent

}) => {
    return (
        <FlatList data={itemListProp}
            renderItem={renderListItemEvent}
            keyExtractor={item => item.id} />
    )
}

export default CustomFlatList
