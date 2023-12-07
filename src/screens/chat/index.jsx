import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import TopMenu from '../../layout/TopMenu';

const Chat = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TopMenu navigation={navigation} />
      <Text>Chat</Text>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f9fc',
    paddingVertical: 20,
  },
});
