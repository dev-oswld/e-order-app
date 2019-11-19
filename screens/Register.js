import axios from 'axios';
import React, { Component } from 'react';
import { StyleSheet, ToastAndroid } from 'react-native';
import { Container, Header, Title, Button, Icon, Left, Right, Body, Content, Form, Item, Input, Text, Thumbnail } from 'native-base';

export default class Register extends Component {
  state = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    //hiddenPassword: true,
  }

  /* clearInputs() {
    this.setState({ username: '' });
    this.setState({ first_name: '' });
    this.setState({ last_name: '' });
    this.setState({ email: '' });
    this.setState({ password: '' });
  } */

  createUser() {
    const payload = { "username": this.state.username, "password": this.state.password, "email": this.state.email, "first_name": this.state.first_name, "last_name": this.state.last_name }
    console.log('Payload data: ', payload);

    if (payload.username == '') {
      ToastAndroid.show('Se debe ingresar un usuario', ToastAndroid.SHORT);
    } else if (payload.first_name == '') {
      ToastAndroid.show('Se debe ingresar el primer nombre propio', ToastAndroid.SHORT);
    } else if (payload.last_name == '') {
      ToastAndroid.show('Se debe ingresar el segundo nombre propio', ToastAndroid.SHORT);
    } else if (payload.email == '') {
      ToastAndroid.show('Se debe ingresar un email', ToastAndroid.SHORT);
    } else if (payload.password == '') {
      ToastAndroid.show('Se debe ingresar una contraseña', ToastAndroid.SHORT);
    } else {
      axios.post('/auth/register/', payload)
        .then(response => {
          //console.log(response.data);
          token = response.data.token;
          axios.defaults.headers.common.Authorization = `Token ${token}`;
          console.log('Tu token es: ', token);
          ToastAndroid.show("Registro exitoso", ToastAndroid.SHORT);
        })
        .catch(error => {
          console.log(error.response);
          ToastAndroid.show('Error al crear la cuenta nueva', ToastAndroid.SHORT);
        });
    }
  }

  onUsernameChange(text) {
    this.setState({ username: text });
  }

  onFirstNameChange(text) {
    this.setState({ first_name: text });
  }

  onLastNameChange(text) {
    this.setState({ last_name: text });
  }

  onEmailChange(text) {
    this.setState({ email: text });
  }

  onPasswordChange(text) {
    this.setState({ password: text });
  }

  // setVisibility = () => { this.setState({ hidePassword: !this.state.hidePassword }); } Fix bugs!
  render() {
    console.log("* Register : NEW *");
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: '#f0c178' }} androidStatusBarColor='#f0c178'>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.navigate('Login')}>
              <Icon type="SimpleLineIcons" name='arrow-left' />
            </Button>
          </Left>
          <Body style={{ flex: 1, alignItems: 'center' }}>
            <Title>Registro de cuenta</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Thumbnail style={styles.image} source={require("../assets/images/map.png")} />
          <Form>
            <Item style={styles.item} rounded stackedLabel last>
              <Input
                style={styles.input}
                placeholder='Ingrese el nombre de usuario'
                placeholderTextColor="white"
                onChangeText={this.onUsernameChange.bind(this)}
              />
            </Item>
            <Item style={styles.item} rounded stackedLabel last>
              <Input
                style={styles.input}
                placeholder='Ingrese el primer nombre propio'
                placeholderTextColor="white"
                onChangeText={this.onFirstNameChange.bind(this)}
              />
            </Item>
            <Item style={styles.item} rounded stackedLabel last>
              <Input
                style={styles.input}
                placeholder='Ingrese el segundo nombre propio'
                placeholderTextColor="white"
                onChangeText={this.onLastNameChange.bind(this)}
              />
            </Item>
            <Item style={styles.item} rounded stackedLabel last>
              <Input
                style={styles.input}
                placeholder='Ingrese un email'
                placeholderTextColor="white"
                onChangeText={this.onEmailChange.bind(this)}
              />
            </Item>
            <Item style={styles.item} rounded stackedLabel last>
              <Input
                style={styles.input}
                secureTextEntry={false} //setVisibility?
                placeholder='Ingrese la contraseña'
                placeholderTextColor="white"
                onChangeText={this.onPasswordChange.bind(this)}
              />
            </Item>
          </Form>
          <Button block rounded large style={styles.button} onPress={this.createUser.bind(this)}>
            <Text>Registrar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2cc8f'
  },
  image: {
    resizeMode: 'contain',
    justifyContent: 'center',
    tintColor: '#3d405b',
    width: 150,
    height: 150,
    marginTop: 15,
    marginLeft: 115,
    marginRight: 115
  },
  item: {
    marginTop: 10,
    borderColor: 'white'
  },
  input: {
    color: 'white'
  },
  button: {
    backgroundColor: '#3d405b',
    marginTop: 30,
    marginLeft: 35,
    marginRight: 35
  }
});