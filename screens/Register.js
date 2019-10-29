import React, { Component } from 'react';
import { StyleSheet,ToastAndroid } from 'react-native';
import { Container, Header, Title, Button, Icon, Left, Right, Body, Content, Form, Item, Input, Text, Toast } from 'native-base';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showToast = () => {
    ToastAndroid.show("Registro exitoso", ToastAndroid.SHORT);
  }

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
          <Form>
            <Item style={styles.item} rounded stackedLabel last>
              <Input style={styles.input} placeholder='Ingrese el nombre de la sucursal' placeholderTextColor="white" />
            </Item>
            <Item style={styles.item} rounded stackedLabel last>
              <Input style={styles.input} placeholder='Ingrese el primer nombre propio' placeholderTextColor="white" />
            </Item>
            <Item style={styles.item} rounded stackedLabel last>
              <Input style={styles.input} placeholder='Ingrese el segundo nombre propio' placeholderTextColor="white" />
            </Item>
            <Item style={styles.item} rounded stackedLabel last>
              <Input style={styles.input} placeholder='Ingrese un email' placeholderTextColor="white" />
            </Item>
            <Item style={styles.item} rounded stackedLabel last>
              <Input style={styles.input} secureTextEntry={true} placeholder='Ingrese la contraseña' placeholderTextColor="white" />
            </Item>
          </Form>
          <Button block rounded large style={styles.button} onPress={this.showToast}>
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