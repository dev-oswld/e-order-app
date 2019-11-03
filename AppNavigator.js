import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Roles from './screens/Roles';
import Administrator from './screens/Administrator';
import Client from './screens/Client';
import MenuTabOne from './tabs/MenuTabOne';
import MenuTabTwo from './tabs/MenuTabTwo';
import MenuTabThree from './tabs/MenuTabThree';
import Chef from './screens/Chef';
import Waiter from './screens/Waiter';


const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Login: { screen: Login },
    Register: { screen: Register },
    Roles: { screen: Roles },
    Administrator: { screen: Administrator },
    Client: { screen: Client },
    MenuTabOne: { screen: MenuTabOne },
    MenuTabTwo: { screen: MenuTabTwo },
    MenuTabThree: { screen: MenuTabThree },
    Chef: { screen: Chef },
    Waiter: { screen: Waiter }
},
    //{ initialRouteName: 'Home' },
    { headerMode: 'none' }
);

const App = createAppContainer(AppNavigator);
export default App;