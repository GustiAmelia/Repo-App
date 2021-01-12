import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, StatusBar,TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Axios from 'axios';
import Autocomplete from 'react-native-autocomplete-input';

const Home = ({navigation})=>{

  const [search, setSearch] = useState('');
  const [data,setData] = useState([]);

  const submitSearch = ()=>{
    Axios.get( `https://api.github.com/search/users?q=${search}&page=1&per_page=3&sort=login&order=desc`)
    .then((res)=>{
      if (res.data.items.length < 1){
        console.log('nothing');
      }
      else {
        console.log('ada');
      }
    })
    .catch((err)=>{
      console.log('11',err);
    });
  };

  useEffect(()=>{
    if (search === ''){
      setData([]);
    }
    else {
      Axios.get( `https://api.github.com/search/users?q=${search}&page=1&per_page=3&sort=login&order=desc`)
      .then((res)=>{
        setData(res.data.items);
      })
      .catch((err)=>{
        console.log('22',err);
      });
    }
  },[search]);

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#25292D"/>
        <Image style={styles.logo} source={require('../../assets/image/logo-github.png')}/>
        <Text style={styles.salam}>Hi Welcome to Github</Text>
        <Autocomplete
        onSubmitEditing={submitSearch}
        data={data}
        defaultValue={search}
        value={search}
        onChangeText={(val)=>setSearch(val)}
        style={styles.search}
        placeholder="Search Repository"
        renderItem={({ item, i }) =>(
          <TouchableOpacity
          style={styles.select}
          onPress={() => navigation.navigate('ListRepo',item)}>
            <Text style={styles.textSelect}>{item.login}</Text>
          </TouchableOpacity>
        )}
      />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#25292D',
    justifyContent:'center',
    paddingHorizontal:16,
    paddingTop:80,
  },
  logo:{
    width:100,
    height:100,
    marginBottom:10,
    alignSelf:'center',
  },
  salam:{
    color:'white',
    marginVertical:20,
    fontSize:18,
    textAlign:'center',
  },
  search:{
    backgroundColor:'white',
  },
  select:{
    backgroundColor:'white',
    elevation:10,
  },
  textSelect:{
    borderBottomWidth:1,
    borderBottomColor:'grey',
    paddingVertical:5,
  },
});
