import React from 'react';
import { View, Text, StyleSheet, StatusBar,TouchableOpacity,TextInput, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ()=>{
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/image/logo-github.png')}/>
      <Text style={styles.salam}>Hi Welcome to Github</Text>
      <TextInput
      style={styles.search}
      placeholder="Search Repository"/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#25292D',
    justifyContent:'center',
    alignItems:'center',
  },
  logo:{
    width:100,
    height:100,
    marginBottom:10,
  },
  salam:{
    color:'white',
    marginVertical:20,
    fontSize:18,
  },
  search:{
    backgroundColor:'white',
    width:'90%',
    borderRadius:10,
  },
});
