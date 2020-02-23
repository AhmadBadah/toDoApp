import React ,{useState} from "react";
import {AppRegistry,Image,Modal,TextInput,TouchableHighlight,TouchableOpacity,View,Text,StyleSheet} from "react-native";

    
  const EnterGoal = props =>{
    const [InputGoal,setInputGoal]= useState('');
    const saveInput = enteredText =>{
        setInputGoal(enteredText);
      };

      return(
        <View>  
          <Modal  
            animationType="fade"                  
            visible={props.show}  
            transparent={false} >
          <View style={{backgroundColor:'white',flex:1}}>
            <Image source={require('../59-590910_to-do-list-comments-do-list-icon-png.png') } style={styles.iconImg} />
              <View style={styles.ModelTxt}>
                <Text style={{fontWeight:'bold',fontSize:20,fontFamily:'sans-serif-thin'}}>Welcome to Task Mangement</Text>
                <TouchableOpacity
                  style={styles.tabCon}
                  onPress={props.cont}>
                  <Text style={{color:'white'}}>Tab To Continue</Text>
                </TouchableOpacity>
          </View>
          </View>
          </Modal>    
          <View>
            <Text style={{textAlign:'left', fontSize:25,fontFamily: 'Roboto', marginVertical:15 }} >To Do list :</Text>
          </View> 
          <View style={styles.inputContainer}>
            <TextInput
            placeholder= {props.place}
            style={styles.input}
            onChangeText={saveInput}
            value={InputGoal} />
            <TouchableHighlight style={styles.button} onPress={props.onclick.bind(this, InputGoal)} underlayColor="white">
              <View >
                  <Text style={styles.buttonText}>Add</Text>
              </View>
            </TouchableHighlight>
          </View>
          
        </View>
      );
     
  }

  AppRegistry.registerComponent('EnterGoal', () => EnterGoal);

  const styles = StyleSheet.create({
    input: {
        width: 250,
        borderColor: 'black',
        borderWidth: 1.5,
        padding: 10,
        marginRight:10,
        borderRadius:10,
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
      padding:15.3
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#007bff',
      borderRadius:7
    },
    tabCon:{
      marginVertical:60,
      backgroundColor: 'black',
      width:270,
      height:50,
      alignItems:'center',
      justifyContent:'center',
      borderBottomLeftRadius:30,
      borderTopRightRadius:30,
    },
    iconImg:{
      width: 150,
      height:150,
      display:'flex',
      alignSelf:'center',
      marginVertical:100
    },
    ModelTxt:{
      display:"flex",
      alignItems:'center',
    }

  });

export default EnterGoal;