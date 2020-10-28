import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Container } from './styles';
import Svg, { Path } from 'react-native-svg';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

type HeaderProps = {
  variant?: 'quit';
  name?: string;
  page?: string;
};

const Header = ({ variant, name, page }: HeaderProps) => {
  const navigation = useNavigation();

  function onNavigate() {
    navigation.navigate(`${page}`);
  }
  return (
    <Container>
      <View>
        <Svg width="104" height="37" viewBox="0 0 162 58" fill="none">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.4673 37.7598C46.0191 44.561 42.133 49.5666 37.6995 52.7223C32.7188 56.2589 26.3696 58 18.7069 58C9.89476 58 4.25718 56.0413 1.73942 52.1238C-0.997268 47.6623 -0.504664 39.9906 3.21723 29C6.99387 18.0094 11.7557 10.3377 17.5575 5.87617C22.7572 1.95872 29.7084 0 38.5205 0C46.4022 0 51.6019 1.7955 54.2291 5.4409C56.4732 8.65103 56.7469 13.6567 55.1049 20.4578L32.8282 22.3077C34.2513 17.955 34.9628 15.2345 35.127 14.0919C35.2365 12.9493 34.9628 12.4053 34.306 12.4053C33.5398 12.4053 32.7735 13.167 31.9525 14.7448C31.022 16.758 29.2705 21.4916 26.698 28.9456C24.1803 36.3996 22.6477 41.1332 22.2099 43.1463C21.9362 44.7242 22.2099 45.4859 22.9761 45.4859C23.6329 45.4859 24.2898 44.9962 24.8918 43.9625C25.4939 42.9287 26.7528 40.1538 28.6685 35.5291L49.4673 37.7598ZM95.6079 57.1295H77.2721L75.6848 46.7917C74.8091 40.9156 74.3712 36.182 74.3712 32.6454C73.6049 35.6923 72.1818 40.1538 70.1567 46.0844L66.3801 57.1839H45.5812L64.7928 0.979362H84.278L85.3727 7.88931C86.4674 14.7448 87.0147 19.8593 87.0694 23.2326C87.8357 19.7505 89.3135 14.8537 91.4481 8.54221L94.0206 0.979362H114.819L95.6079 57.1295ZM157.731 13.3302H147.222L132.28 57.1295H109.182L124.124 13.3302H113.615L117.885 0.870543H162L157.731 13.3302Z"
            fill="#003770"
          />
        </Svg>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{name}</Text>
        <View>
          {!variant ? (
            <RectButton style={styles.quit} onPress={onNavigate}>
              <Svg width="16" height="30" viewBox="0 0 16 30" fill="none">
                <Path
                  d="M0.342337 28.0003L12.4888 15.8286C12.9457 15.3717 12.9457 14.6283 12.4879 14.1705L0.342396 1.99967C-0.114811 1.54153 -0.113992 0.799556 0.344094 0.342408C0.802238 -0.114799 1.54421 -0.114037 2.00136 0.344107L14.146 12.5141C15.5168 13.8848 15.5168 16.1152 14.1469 17.4851L2.00136 29.6559C1.77244 29.8853 1.4722 30 1.17185 30C0.872376 30 0.572787 29.8858 0.344037 29.6576C-0.114049 29.2004 -0.114812 28.4584 0.342337 28.0003Z"
                  fill="black"
                />
              </Svg>
            </RectButton>
          ) : (
            <RectButton style={styles.quit}>
              <Text style={styles.quitText}>Sair</Text>
            </RectButton>
          )}
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  text: {
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
    paddingRight: 10,
  },
  quitText: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    paddingHorizontal: 18,
    paddingVertical: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 18,
  },
  quit: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Header;
