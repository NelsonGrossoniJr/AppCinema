import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const Details = (props) => {
  console.log(props)
  const filme = props.route.params.props
  return (
    <View style={styles.filmeBox}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{filme.name}</Text> 
        <Image source={filme.image} style={styles.cardImg} />
      </View>
      <View style={styles.filmeDesc}> 
        <Text style={styles.filmeDescText}> Local: {filme.local}.</Text>
        <Text style={styles.filmeDescText}> Horario de inicio: {filme.horario}.</Text>
        <Text style={styles.filmeDescText}> Diretores: {filme.diretores}.</Text>
        <Text style={styles.filmeDescText}> Tipo do Filme: {filme.typeFilm}.</Text>
        <Text style={styles.filmeDescText}> Data de lançamento: {filme.datalancamento}.</Text>
        <Text style={styles.filmeDescText}> Classificação Etária: {filme.classificacao}.</Text>
      </View>
    </View>
  );
}

const styles = {
  card: {
    width: '80%',
    flexDirection: 'column',
    marginVertical: 15,
    alignItems: 'center',

  },

  cardTitle: {
    textAlign: 'left',
    paddingTop: 25,
    marginBottom: 25,
    fontSize: 20
  },

  cardImg: {
    width: 200,
    height: 250
  },

  filmeBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'darkcyan',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'column',
    margin: 10,
    alignItems: 'center',
    backgroundColor: "lightcyan"
  },
  
  filmeDesc: {
    textAlign: 'left',
    fontWeight: 'bold',
    marginHorizontal: 10
  },
  filmeDescText: {
    color: 'black',
    fontSize: 14
  },
}

export default Details;