import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native'
import { Navbar } from './src/Navbar.js'
import { InputText } from './src/Input.js'
//import { Todo } from './src/Todo.js';

export default function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
  // const newTodo = {
  //   id: Date.now()
  //}
  setTodos(prev => 
  [...prev, 
    {
    id:Date.now().toString(),
    title: title
    }
  ])
  }
  return (
    <View>
      <Navbar title = 'Todo add!' />
      <View style={styles.container}>
      <InputText onSubmit = {addTodo} />
      <ScrollView>
      {todos.map(todo => 
      {
      //<Todo todo={todo} key={todo.id}/>
      return <Text key = { todo.id }>{todo.title}</Text>
      }
      ) 
      }
      </ScrollView>
      </View>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
