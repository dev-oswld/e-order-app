import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Menu from './screens/Menu';
import Roles from './screens/Roles';
import MainUser from './screens/MainUser';
import UpdateMenu from './screens/UpdateMenu';
import MainMenu from './screens/MainMenu';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Login: { screen: Login },
    Register: { screen: Register },
    Menu: { screen: Menu },
    Roles: { screen: Roles },
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
