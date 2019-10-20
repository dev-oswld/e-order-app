import React from 'react';
import { StatusBar, StyleSheet, View, Button } from 'react-native';

export default class Friends extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ff7f50" />
        <Button
          title="Back to Home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff7f50',
    alignItems: 'center',
    justifyContent: 'center',
  },
});