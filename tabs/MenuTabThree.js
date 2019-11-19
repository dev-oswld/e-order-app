import React, { Component } from 'react';
import { StatusBar, StyleSheet, ToastAndroid } from 'react-native';
import { Container, Content, List, ListItem, Text, CheckBox, Button } from 'native-base';

export default class MenuTabThree extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={styles.container}>
                <StatusBar backgroundColor="#f2cc8f" barStyle="light-content" />
                <Content style={styles.content}>
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
    button: {
        backgroundColor: '#3d405b',
        marginTop: 30,
        marginLeft: 35,
        marginRight: 35
    }
});