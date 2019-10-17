// @dev-oswld

import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const App = (props) => {
  return (
    <View style={styles.containerMain}>
      <Text>React Native rocks! 🥳</Text>
      <View style={styles.bottomView}>
        <Button
          title="Click"
          color="#f5ad5f"
          onPress={() => Alert.alert('Works!')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff',
    fontSize: 25,
  }
});

export default App;
