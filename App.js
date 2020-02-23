import React, { useState }  from 'react';
import {Button,Text,FlatList,View,StyleSheet,TouchableOpacity} from 'react-native';
import ItemList from "./components/itemList";
import EnterGoal from "./components/enterGoal";


export default function App() {

  const [AddGoal,setAddGoal] = useState([]);
  const remove = (ID)=>{
    setAddGoal(currentArr =>{return currentArr.filter((goal)=>
       goal.id !== ID
    )});
  }
  const clearAll = () =>{ setAddGoal(clearArr => {return clearArr.filter(()=>false)})};
  const addHandler = (tst) =>{
    setAddGoal(currentGoal=>[...currentGoal,{id:Math.random().toString(),value: tst}])
  };

  const [modalVisible,setModalVisible]= useState(true);
  const visi = ()=>{setModalVisible((show)=>show==false)}
  const retrunModel = ()=>{setModalVisible(true)}

    return (
        <View style={styles.screen}>
          <EnterGoal place={"Enter Your Goal"} onclick={addHandler} show={modalVisible} cont={visi} />
          <FlatList style={styles.textContainer}
                    data={AddGoal} 
                    renderItem={itemData=><ItemList del={remove} id={itemData.item.id} value={itemData.item.value} />} 
          />
          <TouchableOpacity onPress={clearAll}>
            <View style={styles.clearBtn}>  
              <Text style={styles.textStyle}>Clear</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={retrunModel}>
            <View style={styles.ReturnBtn}>  
              <Text style={styles.textStyle}>Return To Model</Text>
            </View>
          </TouchableOpacity>
        </View>
        

    );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 40,
  },
  textContainer:{
    padding:20,
    display:'flex',
    width:318,
    marginTop:10,
    borderColor:'black',
    borderWidth:1.5,
    borderBottomLeftRadius:20,
    borderTopRightRadius:20,
  },
  clearBtn:{
    marginVertical:20,
    width: 317,
    height:50,
    alignItems: 'center',
    backgroundColor: '#dc3545',
    borderRadius:7,
    justifyContent:"center",
    
  },
  ReturnBtn:{
    marginTop:10,
    width: 317,
    height:50,
    alignItems: 'center',
    backgroundColor: 'black',
    borderBottomLeftRadius:20,
    borderTopRightRadius:20,
    justifyContent:"center",
  },
  textStyle:{
    color:"white"
  }
  });