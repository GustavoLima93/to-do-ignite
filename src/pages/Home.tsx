import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';



export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {

    const task: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    //TODO - add new task
    setTasks(oldState => [...oldState, task])
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists

    const updatedTask = tasks.find(t => t.id === id );

    if(updatedTask) {

      tasks.forEach(t => {
        if(t.id === updatedTask.id) {
          t.done = !t.done;
        }
      })

      setTasks([...tasks])
    }
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state

    const task = tasks.find(t => t.id === id );

    if(task) {
      const t = tasks.filter(t => t.id !== task.id);
      setTasks(oldState => [...t])
    }
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})