import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';

export default class MenuTabTwo extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <StatusBar backgroundColor="#f2cc8f" barStyle="light-content" />
                <Content style={styles.content}>
                    <List style={styles.list}>
                        <ListItem>
                            <Text>  Platillo X</Text>
                        </ListItem>
                        <ListItem>
                            <Text>  Platillo Y</Text>
                        </ListItem>
                        <ListItem>
                            <Text>  Platillo Z</Text>
                        </ListItem>
                        <ListItem>
                            <Text>  Platillo X</Text>
                        </ListItem>
                        <ListItem>
                            <Text>  Platillo Y</Text>
                        </ListItem>
                        <ListItem>
                            <Text>  Platillo Z</Text>
                        </ListItem>
                    </List>
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
    }
});