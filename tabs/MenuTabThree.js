import React, { Component } from 'react';
import { StatusBar, StyleSheet, ToastAndroid } from 'react-native';
import { Container, Content, List, ListItem, Text, CheckBox, Button } from 'native-base';

export default class MenuTabThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    showToast = () => {
        ToastAndroid.show("Su orden fue enviada", ToastAndroid.SHORT);
    }

    render() {
        return (
            <Container style={styles.container}>
                <StatusBar backgroundColor="#f2cc8f" barStyle="light-content" />
                <Content style={styles.content}>
                    <List style={styles.list}>
                        <ListItem>
                            <CheckBox checked={true} color="#3d405b" />
                            <Text>   Platillo X</Text>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={false} color="#3d405b" />
                            <Text>  Platillo Y</Text>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={true} color="#3d405b" />
                            <Text>  Platillo Z</Text>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={false} color="#3d405b" />
                            <Text>  Platillo X</Text>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={false} color="gray" />
                            <Text style={{ color: 'gray' }}>  No disponible</Text>
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={false} color="gray" />
                            <Text style={{ color: 'gray' }}>  No disponible</Text>
                        </ListItem>
                    </List>
                    <Button block rounded large style={styles.button} onPress={this.showToast}>
                        <Text>Ordenar</Text>
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
    content: {
        alignSelf: 'stretch'
    },
    list: {
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#3d405b',
        marginTop: 30,
        marginLeft: 35,
        marginRight: 35
    }
});