import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export const Todo = ( {todo} ) => {
    return
    (
        <TouchableOpacity>
        <View>
            <Text style = {styles.todo}>
            {todo.title}
            </Text>
        </View>
        </TouchableOpacity>
    )
}
 const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        width: 200,
        textAlign: 'center',
        alignItems: 'center',   
        borderWidth: 1,
        borderColor: '#eee', 
    }
 })