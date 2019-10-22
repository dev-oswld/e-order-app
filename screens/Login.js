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


export default class Login extends React.Component {

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
          <Text style={styles.titulo}>INICIO DE SESION</Text>
        </View>
        <View style={styles.logo}>
          <Image source={require("../assets/images/logo.png")} />
        </View>
        <View >
          <Text style={styles.entradas}>Sucursal: </Text>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Ingrese el nombre de la sucursal'}
            style={styles.input}
          />
          <Text style={styles.entradas}>Contraseña: </Text>
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Mínimo ocho carácteres'}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
        <View >
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
            <Text style={styles.button}>Iniciar sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.enlace}>Registrar una cuenta nueva</Text>
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
    justifyContent: 'center'
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
  },
  enlace: {
    marginTop: 10,
    fontSize: 20,
    textDecorationLine: 'underline'
  }
});