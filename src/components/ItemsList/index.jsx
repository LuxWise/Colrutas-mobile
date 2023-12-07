import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UserDetail from '../usedDetail';

const ItemsList = ({img, text, acudientes, text3}) => {
  const [isDetailOpen, setIsDetailOpen] = React.useState(false);

  return (
    <Pressable
      onPress={() => setIsDetailOpen(!isDetailOpen)}
      style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={img} style={styles.logo} />
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={{color: '#080808'}}>Acudiente: {acudientes}</Text>
        <Text style={{color: '#080808'}}>Destino: {text3}</Text>
      </View>
      <UserDetail
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
        text={text}
        acudientes={acudientes}
      />
    </Pressable>
  );
};

export default ItemsList;

const styles = StyleSheet.create({
  container: {
    width: 300,
    maxHeight: 140,
    margin: 10,

    padding: 20,
    borderRadius: 20,

    shadowColor: '#0ea5e9',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.78,
    elevation: 15,
    backgroundColor: '#f5f9fc',
  },
  textContainer: {
    padding: 12,
  },
  imgContainer: {
    gap: 15,
    flexDirection: 'row',
  },
  logo: {
    maxWidth: 50,
    maxHeight: 50,
    borderRadius: 25,
  },
  text: {
    color: '#080808',
    fontWeight: '700',
    fontSize: 17,
    textAlignVertical: 'center',
  },
});
