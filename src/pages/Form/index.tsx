import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Camp from '../../components/Camp';
import { useNavigation, useRoute } from '@react-navigation/native';
import Title from '../../components/Title';
import { RectButton } from 'react-native-gesture-handler';

const Form = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  const currentData = `${date}/${month}/${year}`;
  const route = useRoute();

  const [br, setBr] = useState('');
  const [data, setData] = useState(currentData);
  const [rota, setRota] = useState('');
  const [uf, setUf] = useState('');
  const [trecho, setTrecho] = useState('');
  const [pista, setPista] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.Wrapper}>
        <Text style={styles.title}>
          Preencha todos os campos para continuar
        </Text>
        <Camp
          campState={br}
          name="Número da rodovia"
          size="large"
          setCamp={setBr}
          keyboardType="numeric"
        />
        <Text style={styles.location}>Minha Localização</Text>
      </View>
      <View style={styles.row}>
        <Title text="Data" />
        <Camp
          campState={data}
          name="20/08/2020 "
          setCamp={setData}
          keyboardType="default"
        />
      </View>
      <View style={styles.row2}>
        <Title text="Rota" />
        <Camp
          campState={rota}
          name="1 a 18 "
          setCamp={setRota}
          keyboardType="default"
        />
      </View>
      <View style={styles.row3}>
        <Title text="UF" />
        <Camp
          campState={uf}
          name="ex: SP "
          setCamp={setUf}
          keyboardType="default"
        />
      </View>
      <View style={styles.row4}>
        <Title text="Trecho" />
        <Camp
          campState={trecho}
          name="Ex: 005 "
          setCamp={setTrecho}
          keyboardType="default"
        />
      </View>
      <View style={styles.row}>
        <RectButton onPress={() => setPista(true)}>
          <Text style={!pista ? styles.textofalse : styles.textotrue}>
            Rígido
          </Text>
        </RectButton>
        <RectButton onPress={() => setPista(false)}>
          <Text style={pista ? styles.textofalse : styles.textotrue}>
            Flexível
          </Text>
        </RectButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    justifyContent: 'center',
  },
  textofalse: {
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#CCCCCC',
    fontSize: 18,
    fontFamily: 'Rubik_400Regular',
    paddingHorizontal: 7,
    paddingTop: 12,
    paddingBottom: 10,
  },
  textotrue: {
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 4,
    color: '#ffffff',
    backgroundColor: '#023770',
    fontSize: 18,
    fontFamily: 'Rubik_400Regular',
    paddingHorizontal: 7,
    paddingTop: 12,
    paddingBottom: 10,
  },

  row: {
    flexDirection: 'row',
    marginTop: 32,
    marginLeft: 23,
    marginRight: 140,
  },
  row2: {
    flexDirection: 'row',
    marginTop: 32,
    marginLeft: 23,
    marginRight: 187,
  },
  row3: {
    flexDirection: 'row',
    marginTop: 32,
    marginLeft: 23,
    marginRight: 205,
  },
  row4: {
    flexDirection: 'row',
    marginTop: 32,
    marginLeft: 23,
    marginRight: 150,
  },

  location: {
    paddingLeft: 35,
    paddingTop: 3,
    fontSize: 11,
    color: '#023770',
    textDecorationLine: 'underline',
  },

  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    color: '#111111',
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
});

export default Form;
