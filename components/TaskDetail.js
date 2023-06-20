import React,{useContext} from 'react';
import { View, Text, Button } from 'react-native';
import { tasks } from './TaskList';
import { TodoContext } from '../context';

const TaskDetail = ({ route, navigation }) => {
  const { task } = route.params;
  const [todo, setTodo] = useContext(TodoContext);

  const handleEdit = () => {
   
    navigation.navigate('TaskEdit', { task });
  };
  

  const handleDelete = () => {
    const updatedTasks = todo.filter((t) => t.id !== task.id);
    setTodo(updatedTasks)
    navigation.goBack();
    
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{task.title}</Text>
      <Text style={{ fontSize: 16 }}>{task.description}</Text>
      <Text style={{ fontSize: 16 }}>{task.dueDate}</Text>

      <Button title="Edit" onPress={handleEdit} />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

export default TaskDetail;
