import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';


export default class Register extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onLogin() {
    const { username, password } = this.state;
    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.barNav}>
          <Text style={styles.titulo}>REGISTRAR CUENTA</Text>
        </View>

        <View style={styles.logo}>
          <Image source={require("../assets/images/logo.png")} />
        </View>

        <View >
          <Text style={styles.entradas}>Crea el nombre de la sucursal: </Text>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Ingrese el nombre completo'}
            style={styles.input}
          />
          <Text style={styles.entradas}>Crea una contraseña: </Text>
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Mínimo ocho carácteres'}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>

        <View >
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.button}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4B666',
    alignItems: 'center',
  },
  barNav: {
    backgroundColor: "#ff7f50",
    padding: 15,
    textAlign: 'center',
    overflow: 'hidden',
    width: '100%',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    marginTop: 10,
    alignItems: 'center'
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 20
  },
  input: {
    width: 340,
    height: 50,
    padding: 15,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
  },
  entradas: {
    fontWeight: 'bold',
    fontSize: 25
  },
  button: {
    backgroundColor: '#ff7f50',
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 5,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 10,
    textAlign: 'center',
    marginTop: 10,
  }
});