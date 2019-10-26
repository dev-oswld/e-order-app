import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Container, Content, Thumbnail, Button, Text } from 'native-base';

export default class Login extends Component {

  render() {
    console.log("+ Home : Welcome +");
    return (
      <Container style={styles.container}>
        <StatusBar backgroundColor="#f2cc8f" barStyle="light-content" />
        <Content>
          <Thumbnail square style={styles.logo} source={require("../assets/images/logo.png")} />
          <Button block rounded large style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
            <Text>Comenzar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2cc8f',
    alignItems: 'center'
  },
  logo: {
    resizeMode: 'contain',
    justifyContent: 'center',
    width: 300,
    height: 300,
    marginTop: 80
  },
  button: {
    backgroundColor: '#3d405b'
  }
});