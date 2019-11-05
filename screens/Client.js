import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Tab, Tabs, Title, Body, Left, Right, Button, Icon } from 'native-base';
import TabOne from '../tabs/MenuTabOne';
import TabTwo from '../tabs/MenuTabTwo';
import TabThree from '../tabs/MenuTabThree';

export default class Client extends Component {
    render() {
        console.log("+ Client +");
        return (
            <Container style={styles.container}>
                <Header style={{ backgroundColor: '#f0c178' }} androidStatusBarColor='#f0c178' hasTabs>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.navigate('Login')}>
                            <Icon type="SimpleLineIcons" name='power' />
                        </Button>
                    </Left>
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Title>Menú del día</Title>
                    </Body>
                    <Right />
                </Header>
                <Tabs tabContainerStyle={{ elevation: 0 }} tabBarUnderlineStyle={{ backgroundColor: '#3d405b' }}>
                    <Tab heading="Principal" tabStyle={{ backgroundColor: '#f0c178' }} textStyle={{ color: 'white', fontSize: 15 }} activeTabStyle={{ backgroundColor: '#f2cc8f' }} activeTextStyle={{ color: '#000080', fontSize: 20 }}>
                        <TabOne />
                    </Tab>
                    <Tab heading="Entrada" tabStyle={{ backgroundColor: '#f0c178' }} textStyle={{ color: 'white', fontSize: 15 }} activeTabStyle={{ backgroundColor: '#f2cc8f' }} activeTextStyle={{ color: '#000080', fontSize: 20 }}>
                        <TabTwo />
                    </Tab>
                    <Tab heading="Bebidas" tabStyle={{ backgroundColor: '#f0c178' }} textStyle={{ color: 'white', fontSize: 15 }} activeTabStyle={{ backgroundColor: '#f2cc8f' }} activeTextStyle={{ color: '#000080', fontSize: 20 }}>
                        <TabThree />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2cc8f'
    }
});