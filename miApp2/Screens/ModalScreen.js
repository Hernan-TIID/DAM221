import React, { use } from "react"
import { useState, useRef, useMemo,useCallback } from "react";
//import {GestureHandlerRootView} from 'react-native-gesture-handler';
import{view, Text, Modal, TextInput, Pressable, StyleSheet, StatusBar, FlatList} from 'react';
import BottomSheet, {BottomSheetView} from 'react';

export default function ModalScreen(){
    const [modalVisible, setModalVisible] = useState(false);
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [priority, setPriority] = useState('Media');

    const bottomSheetRef = useRef(null);   
    const nextTaskId = useRef(0);
    const snapPoints = useMemo(()=> ['35%','55%'],[]);

    const openBottomSheet = useCallback(()=>{bottomSheetRef.current?.snapToIndex(0);}, [])

    const saveTask = ()=>{
        const taskName = task.trim();
        if(taskName === ''){
            return;
    }

    setTasks((currentTasks) =>[...currentTasks,
        {
            id: nameTaskId.current++,
            name: taskName,
            priority
        }
    ]);

    setTask('');
    setModalVisible(false);
};

    const selectPriority = (currentTasks) =>{
        setPriority(selectedPriority);
        bottomSheetRef.current?.close();
    }
    
    return(
        <GestureHandlerRootView style={StyleSheet.root} >
            <StatusBar barStyle='dark-content'/>
                <View style = {StyleSheet.container}>
                    <Text style = {styles.title}>Organiza tus tareas</Text>
                    <Text style = {styles.subtitle}>Crea una nueva tarea</Text>

                    <Pressable style={styles.primaryButton} onPress={() => {setModalVisible(true)}}>
                        <Text style={styles.buttonText}>+ Nueva tarea</Text>
                    </Pressable>

                    <Pressable style = {styles.secondaryButton} onPress={()=>{openBottomSheet}}>
                        <Text style = {styles.buttonText}>Seleccionar Prioridad</Text>
                    </Pressable>

                    <FlatList style = {styles.taskList}
                    contentContainerStyle = {styles.taskListContent}
                    data = {tasks}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({item,index}) =>(
                        <View style={styles.taskCard}>
                            <Text style={styles.cardTitle}>Tarea {index + 1}</Text>
                            <Text style={styles.taskText}>{item.name}</Text>
                            <Text style = {styles.priorityText}>Prioridad: {item.priority}</Text>

                        </View>

                    )}
                    />
                </View>

                <Modal visible={modalVisible} animationType='slide' transparent onRequestClose={()=>setModalVisible(false)}>
                    <View style={styles.modalBackground}>
                        <View style={styles.modalCard}>
                            <Text style={styles.modalTitle}> Nueva Tarea</Text>
                            <Text style={styles.description}> Escribe el nombre de tu actividad</Text>
                            <TextInput style= {styles.input} placeholder = 'Ej. Estudiar ReactNative' value={task} onChangeText = {setTask} ></TextInput>
                            <Pressable style= {styles.primaryButton} onPress={saveTask}>
                                <Text style={styles.buttonText}>Guardar Tarea</Text>
                            </Pressable>

                            <Pressable style={styles.cancelButton} onPress={saveTask}>
                                <Text style={styles.cancelText}>Cancelar</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                enablePanDownToClose
                backgroundStyle = {styles.sheetBackground}
                handleIndicatorStyle = {styles.handleIndicator}>
                    <BottomSheetView styles = {styles.sheetContent}>
                        <Text style = {styles.sheetTitle}>Selecciona la prioridad</Text>
                        <Text style={styles.description}>Elige la importancia de tu tarea</Text>
                        {['Baja','Media','Alta'].map((item) =>{
                            return(
                                <Pressable
                                key={item}
                                style ={[styles.priorityOption, priority === item && styles.selectedOption]}
                                onPress = {()=> selectPriority(item)}
                                >
                                    <Text style={[styles.priorityText, priority === item && styles.selectedText]} >{item}</Text>
                                </Pressable>
                            )
                        })}
                    </BottomSheetView>
                </BottomSheet>
        </GestureHandlerRootView>

    );
}
