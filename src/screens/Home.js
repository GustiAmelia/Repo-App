import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, StatusBar,TouchableOpacity,TextInput, Image } from 'react-native';
import Axios from 'axios';
import Autocomplete from 'react-native-autocomplete-input';

const Home = ({navigation})=>{

  const [search, setSearch] = useState('');
  const [data,setData] = useState([]);
  // console.log(search)
  console.log('data:', data)

  const submitSearch = ()=>{
    Axios.get( `https://api.github.com/search/users?q=${search}&page=1&per_page=3&sort=login&order=desc`)
    .then((res)=>{
      if(res.data.items.length < 1){
        console.log('nothing')
      }
      else{
        console.log('ada')
      }
      // setData(res.data.items);
      // navigation.navigate('ListRepo',res.data.items);
    })
    .catch((err)=>{
      console.log('11',err);
    });
  };

  useEffect(()=>{
    Axios.get( `https://api.github.com/search/users?q=${search}&page=1&per_page=3&sort=login&order=desc`)
    .then((res)=>{
      setData(res.data.items);
      // navigation.navigate('ListRepo',res.data.items);
    })
    .catch((err)=>{
      console.log('22',err);
    });
  },[search]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#25292D"/>
      <Image style={styles.logo} source={require('../../assets/image/logo-github.png')}/>
      <Text style={styles.salam}>Hi Welcome to Github</Text>
      <Autocomplete
      onSubmitEditing={submitSearch}
      data={data}
      defaultValue={search}
      onChangeText={(val)=>setSearch(val)}
      style={styles.search}
      placeholder="Search Repository"
      renderItem={({ item, i }) =>(
        <TouchableOpacity onPress={() => navigation.navigate('ListRepo',item)}>
          <Text>{item.login}</Text>
        </TouchableOpacity>
      )}
    />
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
