import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    backgroundColor: '#e8f0fe',
    borderRadius: 22,

    marginVertical: 15,
    paddingVertical: 12,
    paddingHorizontal: 15,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
  },
  input: {
    color: '#080808',
    fontSize: 16,
  },
});

export default CustomInput;
