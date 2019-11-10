import React, { Component } from 'react';
import { StyleSheet, Platform, Linking, PermissionsAndroid, View } from 'react-native';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
import { Container, Content, Thumbnail, Button, Text } from 'native-base';

export default class Roles extends Component {
    constructor() {
        super();
        this.state = {
            valueQR: '',
            scannerState: false,
        };
    }

    openLink() {
        Linking.openURL(this.state.valueQR);
    }

    onScan(valueQR) {
        this.setState({ valueQR: valueQR });
        this.setState({ scannerState: false });
    }

    openScanner() {
        var that = this;
        if (Platform.OS === 'android') {
            async function requestCameraPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA, {
                        'title': 'Aviso de E-ORDER',
                        'message': 'Se necesita el permiso de uso de la cámara'
                    })
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        that.setState({ valueQR: '' });
                        that.setState({ scannerState: true });
                    } else {
                        alert("No se concedió el permiso");
                    }
                } catch (err) {
                    alert("Error al acceder a la cámara", err);
                    console.warn(err);
                }
            }
            requestCameraPermission();
        } else {
            that.setState({ valueQR: '' });
            that.setState({ scannerState: true });
        }
    }

    render() {
        console.log("+ Roles : 4 types +");
        //Add icons and navigation?
        if (!this.state.scannerState) {
            return (
                <Container style={styles.container}>
                    <Content>
                        <Thumbnail style={styles.Image} source={require("../assets/images/content.png")} />
                        <Text style={styles.textQR}>{this.state.valueQR ? 'QR escaneado: ' + this.state.valueQR : ''}</Text>
                        {this.state.valueQR.includes("http") ?
                            <Button block rounded large style={styles.button} onPress={() => this.openLink()}>
                                <Text>Ir URL</Text>
                            </Button>
                            : null}
                        <Button block rounded large style={styles.button} onPress={() => this.openScanner()}>
                            <Text>Escanear QR</Text>
                        </Button>
                        <Button block rounded large style={styles.button} onPress={() => this.props.navigation.navigate('Administrator')}>
                            <Text>Administración</Text>
                        </Button>
                        <Button block rounded large style={styles.button} onPress={() => this.props.navigation.navigate('Client')}>
                            <Text>Cliente</Text>
                        </Button>
                        <Button block rounded large style={styles.button} onPress={() => this.props.navigation.navigate('Waiter')}>
                            <Text>Mesero</Text>
                        </Button>
                        <Button block rounded large style={styles.button} onPress={() => this.props.navigation.navigate('Chef')}>
                            <Text>Cocinero</Text>
                        </Button>
                    </Content>
                </Container>
            );
        }
        else {
            return (
                <View style={styles.contentCamera}>
                    <CameraKitCameraScreen
                        showFrame={true}
                        scanBarcode={true}
                        laserColor={'orange'}
                        frameColor={'white'}
                        colorForScannerFrame={'black'}
                        onReadCode={event => this.onScan(event.nativeEvent.codeStringValue)}
                        offsetForScannerFrame = {40}   // default 30
                        heightForScannerFrame = {300}   // default 200
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2cc8f',
        alignItems: 'center'
    },
    contentCamera: {
        flex: 1
    },
    logo: {
        resizeMode: 'contain',
        justifyContent: 'center',
        width: 300,
        height: 300,
        marginTop: 80
    },
    Image: {
        resizeMode: 'contain',
        justifyContent: 'center',
        tintColor: '#3d405b',
        width: 120,
        height: 120,
        marginTop: 25,
        marginLeft: 110,
        marginRight: 110
    },
    button: {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#3d405b'
    },
    textQR: {
        textAlign: 'center',
        fontSize: 25,
        color: '#3d405b',
        marginTop: 5,
    }
});