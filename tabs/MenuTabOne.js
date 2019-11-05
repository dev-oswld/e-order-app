import React, { Component } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, CheckBox } from 'native-base';

export default class MenuTabOne extends Component {
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