import React, {Component} from 'react';
import 
{
    Alert, 
    StyleSheet, 
    View, 
    Button,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';


export default class Home extends React.Component {

      
    render() {
        return (
            <View style={styles.container}>
                <View  style={styles.logo}>
                    <Image source={require("../assets/Images/logo.png")}/>
                </View>
                <View >
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Door') }>
                    <Text style={styles.button}>EMPEZAR</Text>
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
        alignItems: 'center'
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        marginLeft: 20
    },
    button:{

        backgroundColor: '#ff7f50',
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 5,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 10,
        textAlign:'center',
        marginTop: 70,
        width: 200
    }
});
