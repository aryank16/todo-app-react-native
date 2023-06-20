import React, { useState,useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { TodoContext } from '../context';

const TaskEdit = ({ navigation, route}) => {

    const { Adding,task } = route.params;
    const[isAdding,setIsAdding]=useState(Adding);

    const [todo, setTodo] = useContext(TodoContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  

  const handleSave = () => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
    };


    if(isAdding==true)
 {
    setTodo([newTask,...todo])
    setIsAdding(false)
    navigation.goBack();
 }   else{
    const index =todo.findIndex((t) => t.id === task.id);
    const updatedTask = [...todo]
    updatedTask[index]=newTask
    setTodo(updatedTask)
    navigation.navigate('TaskList')
    
 }
 
   
};

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ marginBottom: 12 }}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{ marginBottom: 12 }}
      />
      <TextInput
        placeholder="due date in Format DD-MM-YY"
        value={dueDate}
        onChangeText={setDueDate}
        style={{ marginBottom: 12 }}
        keyboardType='number-pad'
      />

      <Button title="Confirm" onPress={handleSave} />
    </View>
  );
};

export default TaskEdit;
