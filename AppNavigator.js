import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
// Optimize this
import Menu from './screens/Menu';
import Roles from './screens/Roles';
import MainUser from './screens/MainUser';
import UpdateMenu from './screens/UpdateMenu';
import MainMenu from './screens/MainMenu';
//
import PreMenu from './screens/PreMenu';
import Administrator from './screens/Administrator';
import Chef from './screens/Chef';
import Client from './screens/Client';
import Waiter from './screens/Waiter';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Login: { screen: Login },
    Register: { screen: Register },
    PreMenu: { screen: PreMenu },
    Administrator: { screen: Administrator },
    Chef: { screen: Chef },
    Client: { screen: Client },
    Waiter: { screen: Waiter },
    Menu: { screen: Menu },  // Optimize this
    Roles: { screen: Roles }, // Create new stack and sub-stack
    MainUser: { screen: MainUser },
    UpdateMenu: { screen: UpdateMenu },
    MainMenu: { screen: MainMenu }
},
    { //No show navbar and title
        headerMode: 'none',
    }
);

const App = createAppContainer(AppNavigator);
export default App;
