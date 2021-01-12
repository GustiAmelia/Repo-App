import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CardRepo = ({item})=>{
  return (
    <View style={styles.card}>
      <Image
      style={styles.avatar}
      source={{uri:item.owner.avatar_url}}/>
      <View style={styles.infoRepo}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.toolsWrapper}>
          <MaterialCommunityIcons name="circle" size={15} color="#F1E059"/>
          <Text style={styles.tools}>{item.language}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardRepo;

const styles = StyleSheet.create({
  card:{
    flexDirection:'row',
    marginHorizontal:16,
    borderWidth:1,
    marginVertical:10,
    paddingVertical:15,
    paddingHorizontal:10,
    borderRadius:5,
    backgroundColor:'white',
    borderBottomColor:'#6E7377',
    elevation:10,
    alignItems:'center',
  },
  avatar:{
    width:50,
    height:50,
    borderRadius:50,
    marginRight:15,
  },
  title:{
    color:'#2661BB',
    fontWeight:'bold',
    fontSize:18,
    marginBottom:10,
  },
  toolsWrapper:{
    flexDirection:'row',
    alignItems:'center',
  },
  tools:{
    fontSize:14,
    color:'black',
    marginLeft:5,
  },
  startWrapper:{
    flexDirection:'row',
    backgroundColor:'#F9FCFD',
    borderWidth:1,
    justifyContent:'center',
    borderRadius:5,
    paddingVertical:3,
    width:'65%',
    alignSelf:'flex-end',
    marginBottom:10,

  },
  textStart:{
    marginLeft:5,
  },
  update:{
    textAlign:'right',
    fontSize:14,
  },
});
