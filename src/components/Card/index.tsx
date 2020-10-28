import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { RectButton } from 'react-native-gesture-handler';
import Tag from '../Tag';

type CardProps = {
  name: string;
};
const Card = ({ name }: CardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.textBR}>BR 101</Text>
          <Text style={styles.km}>20 de out · 10km</Text>
        </View>

        <View>
          <Text style={styles.quality}>Qualidade:</Text>
          <Tag name={name} />
        </View>
      </View>
      <View style={styles.trashSend}>
        <Text style={styles.send}>Enviado</Text>
        <RectButton>
          <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <Path
              d="M2.25 4.5H3.75H15.75"
              stroke="#CCCCCC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M15.25 4.5C15.25 3.94772 14.8023 3.5 14.25 3.5C13.6977 3.5 13.25 3.94772 13.25 4.5H15.25ZM4.75 4.5C4.75 3.94772 4.30228 3.5 3.75 3.5C3.19772 3.5 2.75 3.94772 2.75 4.5H4.75ZM5 4.5C5 5.05228 5.44772 5.5 6 5.5C6.55228 5.5 7 5.05228 7 4.5H5ZM11 4.5C11 5.05228 11.4477 5.5 12 5.5C12.5523 5.5 13 5.05228 13 4.5H11ZM13.25 4.5V15H15.25V4.5H13.25ZM13.25 15C13.25 15.2761 13.0261 15.5 12.75 15.5V17.5C14.1307 17.5 15.25 16.3807 15.25 15H13.25ZM12.75 15.5H5.25V17.5H12.75V15.5ZM5.25 15.5C4.97386 15.5 4.75 15.2761 4.75 15H2.75C2.75 16.3807 3.86929 17.5 5.25 17.5V15.5ZM4.75 15V4.5H2.75V15H4.75ZM7 4.5V3H5V4.5H7ZM7 3C7 2.72386 7.22386 2.5 7.5 2.5V0.5C6.11929 0.5 5 1.61929 5 3H7ZM7.5 2.5H10.5V0.5H7.5V2.5ZM10.5 2.5C10.7761 2.5 11 2.72386 11 3H13C13 1.61929 11.8807 0.5 10.5 0.5V2.5ZM11 3V4.5H13V3H11Z"
              fill="#CCCCCC"
            />
          </Svg>
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: 240,
    height: 160,
    borderRadius: 4,
    elevation: 4,
    marginTop: 36,
  },
  textBR: {
    fontFamily: 'Inter_700Bold',
    color: '#111111',
    fontSize: 18,
    marginBottom: 5,
  },
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trashSend: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 31,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  send: {
    fontFamily: 'Inter_400Regular',
    color: '#ffffff',
    backgroundColor: '#023770',
    borderRadius: 4,
    paddingHorizontal: 29,
    paddingTop: 6,
    paddingBottom: 7,
  },
  quality: {
    marginTop: 5,
    marginBottom: 4,
    fontFamily: 'Inter_400Regular',
    color: '#888888',
    fontSize: 12,
  },

  km: { fontFamily: 'Inter_400Regular', color: '#888888', fontSize: 12 },
});

export default Card;
