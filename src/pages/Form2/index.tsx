import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Camp from '../../components/Camp';
import Title from '../../components/Title';

const Form2 = () => {
  const [bar, setBar] = useState('');
  const [muni, setMuni] = useState('');
  const barril = Number(bar);
  const Bar = barril * 2;
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <Text style={styles.titleMap}>Progresso de mapeamento</Text>
        </View>
        <View style={styles.bar}>
          <View
            style={{
              height: '100%',
              width: `${Bar}%`,
              backgroundColor: '#003770',
              borderRadius: 10,
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>0km</Text>
          <Text style={styles.title}>50km</Text>
        </View>
        <View style={styles.camp}>
          <Title text="Insira seu km" />
          <Camp
            keyboardType="default"
            setCamp={setBar}
            campState={bar}
            name="35 "
          />
        </View>

        <View style={styles.rower}>
          <Title text="Município" />
          <Camp
            keyboardType="default"
            setCamp={setMuni}
            campState={muni}
            name="São Paulo "
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  camp: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 30,
  },
  rower: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    width: 245,

    justifyContent: 'space-between',
  },
  bar: {
    width: 245,
    height: 26,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 1,
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 11,
    color: '#888888',
    fontFamily: 'Inter_400Regular',
  },
  titleMap: {
    fontSize: 12,
    color: '#5f5f5f',
    fontFamily: 'Inter_400Regular',
  },
});

export default Form2;
