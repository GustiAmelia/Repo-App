import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,TextInput,Image, StatusBar,FlatList } from 'react-native';
import CardRepo from '../components/CardRepo';
import Axios from 'axios';

const ListRepo = ({route})=>{

  const data = route.params;
  const [repos,setRepos] = useState([]);
  console.log(repos)
  useEffect(()=>{
    Axios.get(data[0].repos_url)
    .then((res)=>{
      setRepos(res.data);
    })
    .catch((err)=>{
      console.log(err);
    });
  },[]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#25292D"/>
      <View style={styles.header}>
        <View style={styles.infoUser}>
          <Image
          style={styles.imageAvatar}
          source={{uri:data[0].avatar_url}}/>
          <View style={styles.nameBox}>
            <Text style={styles.name}>{data[0].name}</Text>
            <Text style={styles.username}>{data[0].login}</Text>
          </View>
        </View>
        <TextInput
        style={styles.search}
        placeholder="Find Repository"/>
      </View>
      <View style={styles.footer}>
        <FlatList
        data={repos}
        renderItem ={({item})=>{
          return (
            <CardRepo item={item}/>
          );
        }}
        />
      </View>
    </View>
  );
};

export default ListRepo;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
  header:{
    backgroundColor:'#25292D',
    paddingHorizontal:16,
  },
  infoUser:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:15,
  },
  imageAvatar:{
    width:60,
    height:60,
    borderRadius:50,
  },
  nameBox:{
    marginLeft:15,
  },
  name:{
    color:'white',
    fontSize:20,
    marginBottom:5,
    fontWeight:'bold',
  },
  username:{
    color:'white',
    fontSize:14,
  },
  search:{
    backgroundColor:'white',
    marginVertical:15,
    borderRadius:10,
    paddingHorizontal:10,
    fontSize:16,
  },
  footer:{
    paddingTop:20,
  },
});
