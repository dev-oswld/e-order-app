import React, { Component } from 'react';
import { StyleSheet,ToastAndroid } from 'react-native';
import { Container, Header, Title, Body, Left, Right, Content, Thumbnail, Item, Input, Button, Icon, Text, Form, Label } from 'native-base';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showToast = () => {
    ToastAndroid.show( "Bienvenido", ToastAndroid.SHORT);
  }

  render() {
    console.log("* Login : Account *");
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: '#f0c178' }} androidStatusBarColor='#f0c178'>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon type="SimpleLineIcons" name='arrow-left' />
            </Button>
          </Left>
          <Body style={{ flex: 1, alignItems: 'center' }}>
            <Title>Inicio de sesión</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent onPress={() => alert('QR section')}>
              <Icon type="SimpleLineIcons" name='camera' />
              <Text>QR</Text>
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          <Thumbnail style={styles.userImage} source={require("../assets/images/user-login.png")} />
          <Form>
            <Item style={styles.item} rounded stackedLabel last>
              <Input style={styles.input} placeholder='Ingrese el nombre de la sucursal' placeholderTextColor="white" />
            </Item>
            <Item style={styles.item} rounded stackedLabel last>
              <Input style={styles.input} secureTextEntry={true} placeholder='Ingrese la contraseña' placeholderTextColor="white" />
            </Item>
          </Form>
          <Button block rounded large style={styles.button} onPress={this.showToast}>
            <Text>Iniciar sesión</Text>
          </Button>
          <Label style={{marginTop:10, justifyContent: 'center'}} onPress={() => this.props.navigation.navigate('Register')}>Registrar una nueva cuenta</Label>
        </Content>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2cc8f'
  },
  content: {
    flex: 2,
    alignSelf: 'center'
  },
  userImage: {
    resizeMode: 'contain',
    justifyContent: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
    marginTop: 15
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