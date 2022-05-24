import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    // stylesheet passado como objeto
    <View style={style.container}>
      <Text style={style.text}>Hello, world!</Text>
    </View>
  );
};

const style = StyleSheet.create({
  // flex por padrao
  container: {
    backgroundColor: 'cyan',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    color: 'white',
    fontWeight: '700',
    textShadowColor: 'purple',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 6,
      heigth: 10,
    },
  },
});

export default App;
