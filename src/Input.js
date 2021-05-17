import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const InputText = ({ onSubmit }) =>{
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if(value.trim()){
        onSubmit(value)
        setValue('')
        }else{
            Alert.alert("Please enter something...")
        }
    }
    return(
    <View style = {styles.block}>
    <TextInput         
    style={styles.input}
    onChangeText={setValue}
    value = {value}
    placeholder = "Enter"
    autoCorrect = {true}
    autoCapitalize = "sentences"
    //keyboardType = "number-pad"
    />
    <Button
        title="Push"
        onPress = { pressHandler }
    />
    </View>
    );
}
const styles = StyleSheet.create({
    block: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    },
    input: {
    height: 30,
    width: '80%',
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    }
  });