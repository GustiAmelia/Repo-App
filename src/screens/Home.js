import React,{useState} from 'react';
import { View, Text, StyleSheet, StatusBar,TouchableOpacity,TextInput, Image } from 'react-native';
import Axios from 'axios';

const Home = ({navigation})=>{

  const [search, setSearch] = useState('');

  const submitSearch = ()=>{
    Axios.get( `https://api.github.com/search/users?q=${search}`)
    .then((res)=>{
      // console.log(res.data.items);
      navigation.navigate('ListRepo',res.data.items);
    })
    .catch((err)=>{
      console.log(err);
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#25292D"/>
      <Image style={styles.logo} source={require('../../assets/image/logo-github.png')}/>
      <Text style={styles.salam}>Hi Welcome to Github</Text>
      <TextInput
      onSubmitEditing={submitSearch}
      onChangeText={(val)=>setSearch(val)}
      value={search}
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
