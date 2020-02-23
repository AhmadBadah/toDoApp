import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";

const ItemList = props =>{
    return(
      <TouchableOpacity onPress={props.del.bind(this,props.id)}>
        <View style={styles.TxtContiner}>  
          <Text style={styles.textStyle}>{props.value}</Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 15,
        color:'black',      
      },
      TxtContiner:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:7,
        borderBottomLeftRadius:20,
        borderTopRightRadius:20,
        borderWidth:1,
        height:50,
        borderColor:'black'       
        },
}) 

export default ItemList;