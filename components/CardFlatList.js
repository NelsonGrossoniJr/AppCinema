import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function CardFlatlist({navigation}){

  const [filmesList, setFilmesList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.npoint.io/a4e279a5e5f797edba68');
      const data = await response.json();
      data.sort((a,b) => {
        let aD= a.datalancamento.slice(-2)* 1
        let bD= b.datalancamento.slice(-2)* 1
        return (aD - bD)
         
      })
      setFilmesList(data);
    } catch (error) {
      console.error(error); 
    }
  };
  
  const RenderFilme = (props) => {
    var filme = props.item.item
     
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> {navigation.navigate("Details", {props: filme})}} style={styles.container} >
          <View style={styles.card}> 
            <Text style={styles.cardTitle}>{filme.name}</Text>
            <Image source={{ uri: filme.image }} style={styles.cardImg} />
          </View> 
        </TouchableOpacity>
      </View>
    ) 
     
  }

  return ( 
    <SafeAreaView style={styles.container}>
      <FlatList data={filmesList}
      numColumns={2}
      renderItem= {(filme) => {return <RenderFilme item={filme}/>}}
      />
       
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  card: {
    flex: 1,
    width: '100%',
    height: 50,
    backgroundColor: 'lightcyan',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    width: '75%',
    height: '100%',
    fontSize: 20,
  },
  cardImg: {
    width: '25%',
    height: 50,
  },
});

