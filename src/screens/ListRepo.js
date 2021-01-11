import React from 'react';
import { View, Text, StyleSheet, StatusBar,TouchableOpacity,TextInput,Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CardRepo from '../components/CardRepo';

const ListRepo = ()=>{
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.infoUser}>
          <Image
          style={styles.imageAvatar}
          source={require('../../assets/image/logo-github.png')}/>
          <View style={styles.nameBox}>
            <Text style={styles.name}>Amel (nama)</Text>
            <Text style={styles.username}>GustiAmelia (login)</Text>
          </View>
        </View>
        <TextInput
        style={styles.search}
        placeholder="Find Repository"/>
      </View>
      <View style={styles.footer}>
        <CardRepo/>
        <CardRepo/>
        <CardRepo/>
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
