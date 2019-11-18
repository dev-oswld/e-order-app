import axios from 'axios';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, ToastAndroid, SafeAreaView, FlatList, StatusBar } from 'react-native';
import { Container, Header, Title, Body, Left, Right, Content, Button, Icon, Text, Card, CardItem, Spinner } from 'native-base';

export default class Positions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data_list: [],
        };
    }

    componentDidMount() {
        //this.setState({ loading: false });
        axios.get('/restaurant/position/list/')
            .then(response => {
                this.setState({
                    loading: false,
                    data_list: response.data
                });
            })
            .catch(error => {
                console.log(error.response);
                ToastAndroid.showWithGravityAndOffset('Error al cargar los datos', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 50);
            });
    }

    selectedPosition(position_id) {
        console.log(position_id);
    }

    renderItem(data) {
        return (
            <SafeAreaView>
                <TouchableOpacity onPress={this.selectedPosition.bind(this, data.item.id)}>
                    <Card>
                        <CardItem bordered>
                            <Body>
                                <Text>{data.item.description} </Text>
                                <Text>ID: {data.item.id} | Rol: {data.item.role}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    render() {
        console.log("+ Positions +");
        const loading = this.state.loading;
        if (loading != true) {
            return (
                <Container style={styles.container}>
                    <Header style={{ backgroundColor: '#f0c178' }} androidStatusBarColor='#f0c178'>
                        <Left style={{ flex: 1 }}>
                            <Button transparent onPress={() => this.props.navigation.navigate('Administrator')}>
                                <Icon type="SimpleLineIcons" name='arrow-left' />
                            </Button>
                        </Left>
                        <Body style={{ flex: 1, alignItems: 'center' }}>
                            <Title>Puestos</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <FlatList
                            data={this.state.data_list}
                            keyExtractor={(item, index) => "POSITION" + item.id.toString()}
                            renderItem={this.renderItem.bind(this)} />
                    </Content>
                </Container>
            );
        }
        else {
            return (
                <Container style={styles.container}>
                    <StatusBar backgroundColor="#f2cc8f" barStyle="light-content" />
                    <Text style={styles.textSpinner}>Cargando información</Text>
                    <Spinner color='white' />
                </Container>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#f2cc8f',
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center'
    },
    textSpinner: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 40,
        color: 'white',
        width: '100%'
    }
});