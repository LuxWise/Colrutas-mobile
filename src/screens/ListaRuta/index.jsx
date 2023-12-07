import {
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  BackHandler,
  SafeAreaView,
} from 'react-native';
import React, {useEffect} from 'react';
import CustomReturn from '../../components/customReturn';
import ItemsList from '../../components/ItemsList';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import TopMenu from '../../layout/TopMenu';

const ListaRuta = ({navigation}) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  const handleBackButton = () => {
    navigation.replace('Home');
    return true;
  };

  const redirict = () => {
    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopMenu navigation={navigation} />
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#0066CC"
      />
      <CustomReturn icon="clipboard" onPress={redirict} text="Lista de rutas" />
      <ScrollView style={{width: '100%'}}>
        <View style={{padding: 20, alignItems: 'center'}}>
          <ItemsList
            img={user1}
            text="Emanuel Gonzalez"
            acudientes="Fabian Gonzalez"
            text3="donde sea"
          />
          <ItemsList
            img={user1}
            text="David Alvarez"
            acudientes="Felipe Alvarez"
            text3="donde sea"
          />
          <ItemsList
            img={user2}
            text="Juan David Lopez"
            acudientes="Sofia Rincon"
            text3="donde sea"
          />
          <ItemsList
            img={user2}
            text="Emilia Corredor"
            acudientes="Daniela Martinez"
            text3="donde sea"
          />
          <ItemsList
            img={user1}
            text="Felipe Muñoz"
            acudientes="Alejandro Muñoz"
            text3="donde sea"
          />
          <ItemsList
            img={user1}
            text="Miguel Rincon"
            acudientes="Pedro Rincon"
            text3="donde sea"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListaRuta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
});
