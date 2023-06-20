import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { TodoContext } from '../context';
import TaskEdit from './TaskEdit';



const TaskList = ({ navigation }) => {

    const [todo, setTodo] = useContext(TodoContext);

  const renderItem = ({ item }) => (
 <View>
     
    <TouchableOpacity onPress={() => navigation.navigate('TaskDetail', { task: item })} >
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
        <Text style={{ fontSize: 16 }}>{item.description}</Text>
        <Text style={{ fontSize: 16 }}>{item.dueDate}</Text>
        
      </View>
      
    </TouchableOpacity>
    </View>
  );

  return (
    <View><Button title='add new task' onPress={()=>navigation.navigate('TaskEdit',{Adding:true})}/>
    <FlatList
      data={todo}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
    
    </View>
  );
};

export default TaskList;


