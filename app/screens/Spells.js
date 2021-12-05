import React from 'react';
import { Text, View, StyleSheet, ScrollView,  Dimensions, TextInput} from 'react-native'; 
import SpellsModal from '../components/SpellsModal';
import SpellTitle from '../components/SpellTitle';
//import { useStore, setStore } from "../components/DDGlobal";
import { useState } from '@hookstate/core';
import value  from '../components/DDGlobal';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorageLib from '@react-native-async-storage/async-storage';


const windowHeight = Dimensions.get('window').height;

const Spells = () =>{
  // title of screen
  const [title, setTitle] = React.useState('Spells');
  //  able to change state of screen
  const state = useState(value);

  const onAddSpell = async () => {
    const spell = {key: 4, text: "pls work"}
    await AsyncStorageLib.setItem('asyncTest', JSON.stringify(spell));
  }
  const onCheckSpell= async () => {
    const result = await AsyncStorageLib.getItem('asyncTest');
    console.log(result)
  }
  
  return ( 
    <View style={styles.container}> 
     <View
        style={{
          backgroundColor: '#231942',
          borderBottomEndRadius: 5,
          borderBottomStartRadius: 5,
          marginBottom: 15,
        }}>
      {/* displays title */}
        <Text style={styles.header}>{title}</Text>
      </View>
       {/* button that refers to function called CodingSucks */}
      <View>
        <TouchableOpacity onPress={onAddSpell}>
          <Text> add spell </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={onCheckSpell}>
          <Text> check spell </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.innerContainer}>
         {/* displays each item in each container*/}
        {state.slice(1).map(item => (
          
          <View style={styles.spellContainer} key={item.key.get()} >
          
          <SpellTitle item={ item }/>

           {/* pop up that gives users options to: Delete, Edit, Rename */}
          <SpellsModal item={ item }/>   
        </View>
        ))}
        
      </ScrollView>
    </View> 

  );
}

const styles = StyleSheet.create ({
   spellContainer: {
    flex: 1,
    //borderWidth: 1,
    padding: 20,
    marginLeft: 17,
    marginRight: 17,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#E4D8C6',
    borderRadius: 10,
    
  },

  spellText: {
    flex: 3, 
    //borderWidth: 1, 
    textAlign: 'center',
    fontSize: 20,
    color: '#4A3D59',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#9988A4',
    paddingBottom: windowHeight / 20,
    justifyContent: 'space-between',
  }, 
  header: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E6DEFC',
  },

  innerContainer: {
    borderWidth: 1,
    flex: 1,
  },
  text: {
    color: 'white',
  }
 });


export default Spells;