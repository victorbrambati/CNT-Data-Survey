import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
type TitleProps = {
  text: string;
};
const Title = ({ text }: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#111111',
  },
});

export default Title;
