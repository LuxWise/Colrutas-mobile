import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import Menu from '../components/Menu';

const TopMenu = ({navigation}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <View style={styles.container}>
      <Icon
        onPress={() => setIsMenuOpen(!isMenuOpen)}
        name="menu"
        size={35}
        color="#0ea5e9"
      />
      <Entypo name="notification" size={30} color="#0ea5e9" />
      <Menu
        navigation={navigation}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </View>
  );
};

export default TopMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxHeight: 40,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
});
