import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  BackHandler,
  SafeAreaView,
} from 'react-native';
import React, {useEffect} from 'react';
import CustomReturn from '../../components/customReturn';
import ItemsList from '../../components/ItemsList';
import ruta from '../../assets/ruta.png';
import TopMenu from '../../layout/TopMenu';
import ItemsRutas from '../../components/ItemsRutas';

const ListaRutas = ({navigation}) => {
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
      <CustomReturn
        icon="calendar"
        onPress={redirict}
        text="Listado de rutas"
      />
      <ScrollView>
        <View style={{padding: 20}}>
          <ItemsRutas
            img={ruta}
            text="Ruta 161"
            recogida="tal"
            destino="donde sea"
          />
          <ItemsRutas
            img={ruta}
            text="Ruta 262"
            recogida="tal"
            destino="donde sea"
          />
          <ItemsRutas
            img={ruta}
            text="Ruta 392"
            recogida="tal"
            destino="donde sea"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListaRutas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
});
